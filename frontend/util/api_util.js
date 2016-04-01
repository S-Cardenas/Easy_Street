var ApiActions = require('../actions/api_actions.js');
var SessionActions = require('../actions/session_actions.js');

var ApiUtil = {

  fetchProperties: function() {
    $.ajax({
      type: 'GET',
      dataType: "JSON",
      url: "/api/properties",
      success: function(properties) {
        ApiActions.receiveAllProperties(properties);
      },
      error: function() {
        console.log("Didn't find the properties.");
      }
    });
  },

  fetchProperty: function(id) {
    $.ajax({
      type: 'GET',
      dataType: 'JSON',
      url: '/api/properties/' + id,
      success: function(property) {
        ApiActions.focusedProperty(property);
      },
      error: function() {
        console.log("Didn't find the property.");
      }
    });
  },

	login: function(credentials, callback) {
		$.ajax({
			type: "POST",
			url: "/api/session",
			dataType: "JSON",
			data: credentials,
			success: function(currentUser) {
				SessionActions.currentUserReceived(currentUser);
				callback && callback();
			}
		});
	},

	fetchCurrentUser: function(completion) {
    $.ajax({
      type: "GET",
      url: "/api/session",
      dataType: "JSON",
      success: function(currentUser) {
        SessionActions.currentUserReceived(currentUser);
      },
      complete: function() {
        completion && completion();
      }
    });
  }
};

module.exports = ApiUtil;
