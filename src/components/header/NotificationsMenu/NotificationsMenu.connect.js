import { connect } from 'react-redux';

// import {
//     createDeepEqualSelector,
//     currentUsernameSelector,
//     entitiesArraySelector,
//     statusSelector,
// } from 'app/redux/selectors/common';
//import { hydratedNotificationsSelector } from 'app/redux/selectors/notifications';
//import { markAllNotificationsAsViewed } from 'app/redux/actions/notifications';
// import {
//     getNotificationsOnlineHistory,
//     clearOnlineNotifications,
// } from 'app/redux/actions/notificationsOnline';
import NotificationsMenu from './NotificationsMenu';

// const filteredNotificationsSelector = createDeepEqualSelector(
//     [entitiesArraySelector('notificationsOnline')],
//     notifications =>
//         notifications.sortBy(a => new Date(a.get('createdAt')).getTime(), (a, b) => b - a)
// );

export default connect(
  () => ({
    notifications: [],
    isFetching: false,
    canLoadMore: false,
    lastLoadedId: null,
    authorizedUsername: null,
  }),
  {
    getNotificationsOnlineHistory: () => {},
    markAllNotificationsAsViewed: () => {},
    clearOnlineNotifications: () => {},
  }
)(NotificationsMenu);
