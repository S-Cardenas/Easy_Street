var ApiDispatcher = require('../dispatcher/dispatcher.js');
var PropertyConstants = require('../constants/property_constants.js');
var ImageConstants = require('../constants/image_constants.js');

var ApiActions = {
  receiveAllProperties: function(properties) {
    ApiDispatcher.dispatch({
      actionType: PropertyConstants.PROPERTIES_RECEIVED,
      properties: properties
    });
  },

	reiveProperty: function(property) {
		ApiDispatcher.dispatch({
			actionType: PropertyConstants.PROPERTY_RECEIVED,
			property: property
		});
	},

  focusedProperty: function(property) {
    ApiDispatcher.dispatch({
      actionType: PropertyConstants.FOCUSED_PROPERTY,
      property: property
    });
  },

	focusImage: function(image) {
		ApiDispatcher.dispatch({
			actionType: ImageConstants.FOCUSED_IMAGE,
			image: image
		});
	}
};

module.exports = ApiActions;
