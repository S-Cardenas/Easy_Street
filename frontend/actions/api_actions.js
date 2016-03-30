var ApiDispatcher = require('../dispatcher/dispatcher.js');
var PropertyConstants = require('../constants/property_constants.js');


var ApiActions = {
  receiveAllProperties: function(properties) {
    ApiDispatcher.dispatch({
      actionType: PropertyConstants.PROPERTIES_RECEIVED,
      properties: properties
    });
  }
};

module.exports = ApiActions;
