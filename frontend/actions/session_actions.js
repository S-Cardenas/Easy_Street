var ApiDispatcher = require('../dispatcher/dispatcher.js');
var SessionConstants = require('../constants/session_constants');

var SessionActions = {
	currentUserReceived: function(currentUser) {
		ApiDispatcher.dispatch({
			actionType: SessionConstants.CURRENT_USER_RECEIVED,
			currentUser: currentUser
		});
	},

	logout: function() {
		ApiDispatcher.dispatch({
			actionType: SessionConstants.LOGOUT
		});
	}
};

module.exports = SessionActions;
