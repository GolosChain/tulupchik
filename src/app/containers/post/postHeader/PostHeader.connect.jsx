import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { currentPostSelector, authorSelector } from 'src/app/redux/selectors/post/commonPost';
import { currentUsernameSelector } from 'src/app/redux/selectors/common';
import { followingSelector } from 'src/app/redux/selectors/follow/follow';
import { toggleFavoriteAction } from 'src/app/redux/actions/favorites';
import { updateFollow } from 'src/app/redux/actions/follow';
import { PostHeader } from 'src/app/containers/post/postHeader/PostHeader';

export default connect(
    createSelector(
        [
            currentPostSelector,
            authorSelector,
            currentUsernameSelector,
            followingSelector('blog_result'),
        ],
        (post, author, username, follow) => ({
            username,
            isMy: username === author.account,
            created: post.created,
            isFavorite: post.isFavorite,
            author: author.account,
            isFollow: follow.includes(author.account),
            permLink: post.permLink,
            isOwner: username === author.account,
            isPinned: author.pinnedPostsUrls.includes(author.account + '/' + post.permLink),
        })
    ),

    {
        toggleFavorite: toggleFavoriteAction,
        updateFollow,
    }
)(PostHeader);