var ApiActions = require('../actions/api_actions.js');

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
  }
};

module.exports = ApiUtil;
