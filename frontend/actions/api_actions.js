var ApiDispatcher = require('../dispatcher/dispatcher.js');
var PropertyConstants = require('../constants/property_constants.js');


var ApiActions = {
  receiveAllProperties: function(properties) {
    ApiDispatcher.dispatch({
      actionType: PropertyConstants.PROPERTIES_RECEIVED,
      properties: properties
    });
  },

  focusedProperty: function(property) {
    ApiDispatcher.dispatch({
      actionType: PropertyConstants.FOCUSED_PROPERTY,
      property: property 
    });
  }
};

module.exports = ApiActions;
