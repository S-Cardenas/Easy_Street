var ApiActions = require('../actions/api_actions.js');
var SessionActions = require('../actions/session_actions.js');

var ApiUtil = {

  fetchProperties: function(apiCall, callback) {
    $.ajax({
      type: 'GET',
      dataType: "JSON",
      url: "/api/" + apiCall ,
      success: function(properties) {
        ApiActions.receiveAllProperties(properties);
				if (callback) {
					callback();
				}
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

	createProperty: function(formData, callback) {
		$.ajax({
			type: 'POST',
			url: '/api/properties',
			processData: false,
			contentType: false,
			dataType: 'JSON',
			data: formData,
			success: function(property) {
				ApiActions.receiveProperty([property]);
				callback(property);
			}
		});
	},

	fetchBookmarks: function() {
		$.ajax({
			type: 'GET',
			url: '/api/bookmarks',
			dataType: 'JSON',
			success: function(bookmarks) {
				ApiActions.receiveBookmarks(bookmarks);
			}
		});
	},

	addBookmark: function(property) {
		$.ajax({
			type: 'POST',
			url: '/api/bookmarks',
			dataType: 'JSON',
			data: property,
			success: function(bookmarks) {
				ApiActions.receiveBookmarks(bookmarks);
			}
		});
	},

	removeBookmark: function(bookmark, bookmarkId) {
		$.ajax({
			type: 'DELETE',
			url: '/api/bookmarks/' + bookmarkId,
			dataType: 'JSON',
			data: bookmark,
			success: function(bookmarks) {
				ApiActions.receiveBookmarks(bookmarks);
			}
		});
	},

	login: function(credentials, callback) {
		$.ajax({
			type: "POST",
			url: "/api/session",
			dataType: "JSON",
			data: { user: credentials },
			success: function(currentUser) {
				SessionActions.currentUserReceived(currentUser);
				if (callback) {
					callback();
				}
			}
		});
	},

	signUp: function(credentials) {

		$.ajax({
			type: "POST",
			url: "/api/users",
			dataType: "JSON",
			data: { user: credentials },
			success: function(currentUser) {
				SessionActions.currentUserReceived(currentUser);
			}
		});
	},

	logOut: function() {
		$.ajax({
			type: "DELETE",
			url: "/api/session",
			dataType: "JSON",
			success: function() {
				SessionActions.logout();
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
      // complete: function() {
      //   completion && completion();
      // }
    });
  }
};

module.exports = ApiUtil;
