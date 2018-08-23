import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import LoadingIndicator from 'app/components/elements/LoadingIndicator';
import PostsListBlog from 'src/app/components/common/PostsList/PostsListBlog';
import InfoBlock from 'src/app/components/common/InfoBlock';
import EmptyBlock, { EmptySubText } from 'src/app/components/common/EmptyBlock';

const Loader = styled(LoadingIndicator)`
    margin-top: 30px;
`;

class CommentsContent extends Component {
    render() {
        const { pageAccount, isOwner } = this.props;

        const posts = pageAccount.get('posts') || pageAccount.get('comments');

        if (!posts) {
            return <Loader type="circle" center size={40} />;
        }

        const pageUserName = pageAccount.get('name');

        if (!posts.size) {
            return (
                <InfoBlock>
                    <EmptyBlock>
                        Тут пока пусто
                        <EmptySubText>
                            {isOwner
                                ? 'Начни писать комментарии к постам.'
                                : 'Пользователь еще не начал писать комментарии.'}
                        </EmptySubText>
                    </EmptyBlock>
                </InfoBlock>
            );
        }

        return (
            <PostsListBlog
                pageAccountName={pageUserName}
                category="comments"
                allowInlineReply={!isOwner}
                //order="by_author"
                //showSpam TODO
            />
        );
    }
}

export default connect((state, props) => {
    const pageAccountName = props.params.accountName.toLowerCase();
    const pageAccount = state.global.getIn(['accounts', pageAccountName]);
    const isOwner = state.user.getIn(['current', 'username']) === pageAccountName;

    return {
        pageAccount,
        isOwner,
    };
})(CommentsContent);