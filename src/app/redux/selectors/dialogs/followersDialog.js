import { Set } from 'immutable';
import { createDeepEqualSelector, globalSelector, dataSelector, statusSelector } from './../common';

const emptySet = Set();

const getMethodPathByType = (state, { type }) => (type === 'follower' ? 'followers' : 'following');
const getCountPathByType = (state, { type }) =>
    type === 'follower' ? 'follower_count' : 'following_count';

const followersSelector = createDeepEqualSelector(
    [
        dataSelector('followers'),
        statusSelector('followers'),
        getMethodPathByType,
        (state, { pageAccountName }) => pageAccountName,
    ],
    (followers, followersStatus, path, pageAccountName) => ({
        users: followers.getIn([pageAccountName, path, 'blog'], emptySet),
        loading: followersStatus.getIn([pageAccountName, path, 'blog', 'loading'], false),
    })
);

const followCountSelector = createDeepEqualSelector(
    [
        globalSelector('follow_count'),
        getCountPathByType,
        (state, { pageAccountName }) => pageAccountName,
    ],
    (followCount, path, pageAccountName) => followCount.getIn([pageAccountName, path], 0)
);

export const followersDialogSelector = createDeepEqualSelector(
    [globalSelector('accounts'), followersSelector, followCountSelector],
    (accounts, followers, followCount) => ({
        loading: followers.loading,
        users: followers.users.map(name => accounts.get(name)),
        followCount,
    })
);