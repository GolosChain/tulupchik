import { connect } from 'react-redux';

import user from 'app/redux/User';
import transaction from 'app/redux/Transaction';
import { settingsContentSelector } from 'app/redux/selectors/userProfile/settings';
import { getSettingsOptions, setSettingsOptions } from 'app/redux/actions/settings';
import { showNotification } from 'app/redux/actions/ui';
import { authProtection } from 'helpers/hoc';

import SettingsContent from './SettingsContent';

export default authProtection()(
  connect(
    settingsContentSelector,
    dispatch => ({
      updateAccount: ({ successCallback, errorCallback, ...operation }) => {
        dispatch(
          transaction.actions.broadcastOperation({
            type: 'account_metadata',
            operation,
            successCallback: () => {
              dispatch(user.actions.getAccount());
              successCallback();
            },
            errorCallback,
          })
        );
      },
      notify: (message, dismiss = 3000) => {
        dispatch(showNotification(message, 'settings', dismiss));
      },
      getSettingsOptions: () => dispatch(getSettingsOptions()),
      setSettingsOptions: values => dispatch(setSettingsOptions(values)),
    })
  )(SettingsContent)
);
