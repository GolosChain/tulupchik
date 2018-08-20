import { call, fork, put, all, takeEvery, select } from 'redux-saga/effects';
import { api } from 'golos-js';

import { createAddNotificationOnlineAction } from 'src/app/redux/actions/notificationsOnline';
import { NOTIFICATION_ONLINE_ADD_NOTIFICATION } from 'src/app/redux/constants/notificationsOnline';
import { getAccount } from 'app/redux/sagas/shared';
import constants from 'app/redux/constants';

export default function* rootSaga() {
    yield fork(addNotificationsOnlineWatch);
}

function* addNotificationsOnlineWatch() {
    yield takeEvery(NOTIFICATION_ONLINE_ADD_NOTIFICATION, handleAddNotification);
}

// TODO: look in cache before call to api
function* handleAddNotification({
    payload: { vote, flag, transfer, subscribe, unsubscribe, reply, mention, repost, witnessVote, witnessCancelVote },
}) {
    if (vote) {
        yield all(
            vote.map(function*(notification) {
                const { counter, voter, permlink } = notification; // {counter: 1, voter: "destroyer2k", permlink: "re-nickshtefan-re-destroyer2k-s-20180803t094131915z"}

                const current = yield select(state => state.user.get('current'));
                const author = current.get('username');

                const account = yield call(getAccount, voter);

                const content = yield call(
                    [api, api.getContentAsync],
                    author,
                    permlink,
                    constants.DEFAULT_VOTE_LIMIT
                );

                let title = content.title;
                let link = content.link;

                if (content.parent_author) {
                    title = content.root_title;
                    link = content.url;
                }

                yield put(
                    createAddNotificationOnlineAction({
                        type: 'vote',
                        account,
                        title,
                        link,
                    })
                );
            })
        );
    }

    if (flag) {
        yield all(
            flag.map(function*(notification) {
                const { counter, voter, permlink } = notification; // {counter: 1, voter: "destroyer2k", permlink: "re-nickshtefan-re-destroyer2k-s-20180803t094131915z"}

                const current = yield select(state => state.user.get('current'));
                const author = current.get('username');

                const account = yield call(getAccount, voter);

                const content = yield call(
                    [api, api.getContentAsync],
                    author,
                    permlink,
                    constants.DEFAULT_VOTE_LIMIT
                );

                let title = content.title;
                let link = content.link;

                if (content.parent_author) {
                    title = content.root_title;
                    link = content.url;
                }

                yield put(
                    createAddNotificationOnlineAction({
                        type: 'flag',
                        account,
                        title,
                        link,
                    })
                );
            })
        );
    }

    if (transfer) {
        yield all(
            transfer.map(function*(notification) {
                const { counter, from, amount } = notification; // {counter: 1, voter: "destroyer2k", permlink: "re-nickshtefan-re-destroyer2k-s-20180803t094131915z"}

                const account = yield call(getAccount, from);

                yield put(
                    createAddNotificationOnlineAction({
                        type: 'transfer',
                        account,
                        amount,
                    })
                );
            })
        );
    }

    if (reply) {
        yield all(
            reply.map(function*(notification) {
                const { counter, author, permlink } = notification; // {"counter":1,"author":"destroyer2k","permlink":"re-devall-re-nickshtefan-re-destroyer2k-s-20180810t180227217z"}

                const account = yield call(getAccount, author);

                const content = yield call(
                    [api, api.getContentAsync],
                    author,
                    permlink,
                    constants.DEFAULT_VOTE_LIMIT
                );

                let title = content.title;
                let link = content.link;

                if (content.parent_author) {
                    title = content.root_title;
                    link = content.url;
                }

                yield put(
                    createAddNotificationOnlineAction({
                        type: 'reply',
                        account,
                        title,
                        link,
                    })
                );
            })
        );
    }

    if (subscribe) {
        yield all(
            subscribe.map(function*(notification) {
                const { counter, follower } = notification; // {counter: 1, follower: "destroyer2k"}

                const account = yield call(getAccount, follower);
                yield put(
                    createAddNotificationOnlineAction({
                        type: 'subscribe',
                        account,
                    })
                );
            })
        );
    }

    if (unsubscribe) {
        yield all(
            unsubscribe.map(function*(notification) {
                const { counter, follower } = notification; // {counter: 1, follower: "destroyer2k"}

                const account = yield call(getAccount, follower);
                yield put(
                    createAddNotificationOnlineAction({
                        type: 'unsubscribe',
                        account,
                    })
                );
            })
        );
    }

    if (mention) {
        yield all(
            mention.map(function*(notification) {
                const { counter, author, permlink } = notification;

                const account = yield call(getAccount, author);

                const content = yield call(
                    [api, api.getContentAsync],
                    author,
                    permlink,
                    constants.DEFAULT_VOTE_LIMIT
                );

                let title = content.title;
                let link = content.link;

                if (content.parent_author) {
                    title = content.root_title;
                    link = content.url;
                }

                yield put(
                    createAddNotificationOnlineAction({
                        type: 'mention',
                        account,
                        title,
                        link,
                    })
                );
            })
        );
    }

    if (repost) {
        yield all(
            repost.map(function*(notification) {
                const { counter, reposter, permlink } = notification;

                const current = yield select(state => state.user.get('current'));
                const author = current.get('username');

                const account = yield call(getAccount, reposter);

                const content = yield call(
                    [api, api.getContentAsync],
                    author,
                    permlink,
                    constants.DEFAULT_VOTE_LIMIT
                );

                let title = content.title;
                let link = content.link;

                if (content.parent_author) {
                    title = content.root_title;
                    link = content.url;
                }

                yield put(
                    createAddNotificationOnlineAction({
                        type: 'repost',
                        account,
                        title,
                        link,
                    })
                );
            })
        );
    }

    if (witnessVote) {
        yield all(
            witnessVote.map(function*(notification) {
                const { counter, from } = notification;

                const account = yield call(getAccount, from);

                yield put(
                    createAddNotificationOnlineAction({
                        type: 'witnessVote',
                        account,
                    })
                );
            })
        );
    }

    if (witnessCancelVote) {
        yield all(
            witnessCancelVote.map(function*(notification) {
                const { counter, from } = notification;

                const account = yield call(getAccount, from);

                yield put(
                    createAddNotificationOnlineAction({
                        type: 'witnessCancelVote',
                        account,
                    })
                );
            })
        );
    }
}