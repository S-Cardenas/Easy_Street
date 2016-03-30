var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {

  fetchProperties: function() {
    $.ajax({
      type: 'GET',
      dataType: "JSON",
      url: "api/properties",
      success: function(properties) {
        ApiActions.receiveAllProperties(properties);
      },
      error: function() {
        console.log("Didn't find the properties.");
      }
    });
  }
};

module.exports = ApiUtil;
