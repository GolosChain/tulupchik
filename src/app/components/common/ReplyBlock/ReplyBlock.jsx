import React, { Component, Fragment } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import is from 'styled-is';
import tt from 'counterpart';
import Icon from 'golos-ui/Icon';

const Replies = styled(
    ({ to, isLink, ...otherProps }) =>
        isLink ? <Link to={to} {...otherProps} /> : <div {...otherProps} />
)`
    height: 100%;
    min-height: 50px;
    padding: 0 11px 0 18px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;

    ${is('isLink')`
        cursor: pointer;
    `};
`;

const RepliesQuantity = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #959595;
    user-select: none;
`;

const Splitter = styled.div`
    width: 1px;
    height: 26px;
    background: #e1e1e1;
`;

const ReplyButton = styled(
    ({ to, ...otherProps }) => (to ? <Link to={to} {...otherProps} /> : <div {...otherProps} />)
)`
    height: 100%;
    min-height: 50px;
    padding: 0 18px 0 10px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #393636 !important;
    cursor: pointer;
`;

const ReplyIcon = styled(Icon)`
    width: 20px;
    height: 20px;
    margin-right: 7px;
    margin-bottom: -2px;
    color: #393636;
`;

const Root = styled.div`
    display: flex;
    align-items: center;

    ${is('grid')`
        width: 100%;
        height: 56px;
        justify-content: center;
        border-top: 1px solid #e9e9e9;
        
        @media (max-width: 700px) {
            height: 50px;
        }
    `};
`;

export class ReplyBlock extends Component {
    static defaultProps = {
        notOwner: true,
    };

    static propTypes = {
        grid: PropTypes.bool,
        count: PropTypes.number,
        link: PropTypes.string,
        text: PropTypes.string,
        notOwner: PropTypes.bool,
        onReplyClick: PropTypes.func,

        toggleCommentInputFocus: PropTypes.func.isRequired,
    };

    toggleCommentInputFocus = () => {
        this.props.toggleCommentInputFocus(true);
    };

    render() {
        const { grid, count, link, text, notOwner, onReplyClick, className } = this.props;
        const isLink = typeof grid === 'boolean';

        return (
            <Root grid={grid} className={className}>
                <Replies
                    to={`${link}#comments`}
                    data-tooltip={tt('reply.comments_count')}
                    aria-label={tt('aria_label.comments', { count })}
                    isLink={isLink}
                >
                    <ReplyIcon name="reply" />
                    <RepliesQuantity>{count}</RepliesQuantity>
                </Replies>
                {!onReplyClick && (
                    <Fragment>
                        <Splitter />
                        <ReplyButton
                            to={`${link}#createComment`}
                            onClick={this.toggleCommentInputFocus}
                        >
                            {text}
                        </ReplyButton>
                    </Fragment>
                )}
                {Boolean(onReplyClick) &&
                    notOwner && (
                        <Fragment>
                            <Splitter />
                            <ReplyButton role="button" onClick={onReplyClick}>
                                {text}
                            </ReplyButton>
                        </Fragment>
                    )}
            </Root>
        );
    }
}
