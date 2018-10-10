import React, { PureComponent, Fragment, createRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Map } from 'immutable';
import styled from 'styled-components';
import is, { isNot } from 'styled-is';
import tt from 'counterpart';

import { detransliterate } from 'app/utils/ParsersAndFormatters';
import CommentFormLoader from 'app/components/modules/CommentForm/loader';

import CommentFooter from './CommentFooter';
import { CommentAuthor } from './CommentAuthor';
import { EditButton } from './EditButton';
import { ReLink } from './ReLink';
import { CloseOpenButton } from './CloseOpenButton';

const Header = styled.div`
    padding: 10px 0 6px;
    flex-shrink: 0;
`;

const HeaderLine = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2px 18px;
    pointer-events: none;

    & > * {
        pointer-events: initial;
    }
`;

const Category = styled.div`
    flex-shrink: 0;

    height: 28px;
    padding: 0 12px;
    margin-right: 4px;
    border-radius: 6px;
    line-height: 26px;

    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #fff;
    background: #789821;
    cursor: default;
    overflow: hidden;
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 0 18px;
    margin-bottom: 8px;
`;

const PostBody = styled(({ isPostPage, ...otherProps }) => <Link {...otherProps} />)`
    display: block;

    margin-right: 18px;

    font-family: ${a => a.theme.fontFamily};
    color: #959595 !important;

    ${is('isPostPage')`
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `};
`;

const PostBodyWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 18px;
`;

const Root = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 8px;
    background: #ffffff;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);

    ${isNot('commentopen')`
        justify-content: center;
    `};
`;

const Reply = styled.div`
    padding: 0 18px 0 60px;
`;

const CategoryTogglerWrapper = styled.div`
    display: flex;
`;

export class CommentCard extends PureComponent {
    static propTypes = {
        permLink: PropTypes.string,
        grid: PropTypes.bool,
        isPostPage: PropTypes.bool,

        comment: PropTypes.instanceOf(Map),
        title: PropTypes.string.isRequired,
        fullParentURL: PropTypes.string.isRequired,
        extractedContent: PropTypes.shape({
            link: PropTypes.string,
            desc: PropTypes.string,
        }),
        isOwner: PropTypes.bool.isRequired,
        username: PropTypes.string,
    };

    state = {
        myVote: this.getMyVote(this.props),
        showReply: false,
        edit: false,
        isCommentOpen: true,
    };

    commentRef = createRef();
    replyRef = createRef();

    componentWillReceiveProps(newProps) {
        if (this.props.comment !== newProps.comment) {
            this.setState({
                myVote: this.getMyVote(newProps),
            });
        }
    }

    getMyVote(props) {
        const { username, comment } = props;

        for (let vote of comment.get('active_votes')) {
            if (vote.get('voter') === username) {
                const v = vote.toJS();
                v.weight = parseInt(v.weight || 0, 10);
                return v;
            }
        }

        return null;
    }

    renderHeaderForPost() {
        const { isCommentOpen } = this.state;
        const { comment, extractedContent, isPostPage } = this.props;

        return (
            <Header>
                <HeaderLine>
                    <CommentAuthor
                        author={comment.get('author')}
                        created={comment.get('created')}
                    />
                    {!isCommentOpen && (
                        <PostBody
                            to={extractedContent.link}
                            onClick={this.rememberScrollPosition}
                            dangerouslySetInnerHTML={{ __html: extractedContent.desc }}
                            isPostPage={isPostPage}
                        />
                    )}
                    <CloseOpenButton
                        isCommentOpen={isCommentOpen}
                        toggleComment={this.toggleComment}
                    />
                </HeaderLine>
            </Header>
        );
    }

    renderHeaderForProfile() {
        const { isCommentOpen } = this.state;
        const { fullParentURL, title, comment } = this.props;
        const detransliteratedCategory = detransliterate(comment.get('category'));

        return (
            <Header>
                <HeaderLine>
                    {isCommentOpen ? (
                        <CommentAuthor
                            author={comment.get('author')}
                            created={comment.get('created')}
                        />
                    ) : (
                        <ReLink
                            fullParentURL={fullParentURL}
                            title={title}
                            onClick={this.rememberScrollPosition}
                        />
                    )}
                    <CategoryTogglerWrapper>
                        <Category>{detransliteratedCategory}</Category>
                        <CloseOpenButton
                            isCommentOpen={isCommentOpen}
                            toggleComment={this.toggleComment}
                        />
                    </CategoryTogglerWrapper>
                </HeaderLine>
            </Header>
        );
    }

    renderTitle() {
        const { isOwner, fullParentURL, title } = this.props;
        const { edit } = this.state;

        return (
            <Title>
                <ReLink
                    fullParentURL={fullParentURL}
                    title={title}
                    onClick={this.rememberScrollPosition}
                />
                {isOwner && !edit && <EditButton onEditClick={this.onEditClick} />}
            </Title>
        );
    }

    renderBodyText() {
        const { edit } = this.state;
        const { extractedContent, comment, isOwner } = this.props;

        return (
            <Fragment>
                {edit ? (
                    <CommentFormLoader
                        reply
                        editMode
                        hideFooter
                        autoFocus
                        params={comment.toJS()}
                        forwardRef={this.commentRef}
                        onSuccess={this.onEditDone}
                        onCancel={this.onEditDone}
                    />
                ) : (
                    <PostBodyWrapper>
                        <PostBody
                            to={extractedContent.link}
                            onClick={this.rememberScrollPosition}
                            dangerouslySetInnerHTML={{ __html: extractedContent.desc }}
                        />
                        {isOwner && !edit && <EditButton onEditClick={this.onEditClick} />}
                    </PostBodyWrapper>
                )}
            </Fragment>
        );
    }

    renderReplyEditor() {
        const { comment } = this.props;

        return (
            <Reply>
                <CommentFormLoader
                    reply
                    hideFooter
                    autoFocus
                    params={comment.toJS()}
                    forwardRef={this.replyRef}
                    onSuccess={this.onReplySuccess}
                    onCancel={this.onReplyCancel}
                />
            </Reply>
        );
    }

    rememberScrollPosition = () => {
        this.props.onClick();
    };

    onReplySuccess = () => {
        this.setState({
            showReply: false,
        });

        this.props.onNotify(tt('g.reply_has_published'));
    };

    onReplyCancel = () => {
        this.setState({
            showReply: false,
        });
    };

    onEditClick = () => {
        this.setState({
            edit: true,
        });
    };

    onEditDone = () => {
        this.setState({
            edit: false,
        });
    };

    onReplyClick = () => {
        this.setState({
            showReply: true,
        });
    };

    toggleComment = () => {
        this.setState({
            isCommentOpen: !this.state.isCommentOpen,
        });
    };

    render() {
        const { showReply, isCommentOpen, edit, myVote } = this.state;
        const {
            comment,
            username,
            extractedContent,
            isOwner,
            onVote,
            isPostPage,
            className,
        } = this.props;

        return (
            <Root commentopen={isCommentOpen ? 1 : 0} className={className}>
                {isPostPage ? this.renderHeaderForPost() : this.renderHeaderForProfile()}
                {isCommentOpen ? (
                    <Fragment>
                        {!isPostPage && this.renderTitle()}
                        {this.renderBodyText()}
                        {showReply && this.renderReplyEditor()}
                        <CommentFooter
                            comment={comment}
                            contentLink={extractedContent.link}
                            isOwner={isOwner}
                            showReply={showReply}
                            edit={edit}
                            username={username}
                            onVote={onVote}
                            myVote={myVote}
                            replyRef={this.replyRef}
                            commentRef={this.commentRef}
                            onReplyClick={this.onReplyClick}
                        />
                    </Fragment>
                ) : null}
            </Root>
        );
    }
}
