var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PropertyStore = new Store(AppDispatcher);
var PropertyConstants = require('../constants/property_constants');

var _properties = [];
var _focusedProperty = null;

var reset_properties = function(properties) {
  _properties = properties;
};

var reset_focusedProperty = function(property) {
  _focusedProperty = property;
};

PropertyStore.all = function() {
  return _properties.slice(0);
};

PropertyStore.focusedProperty = function() {
  return _focusedProperty;
};

PropertyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PropertyConstants.PROPERTIES_RECEIVED:
      reset_properties(payload.properties);
      PropertyStore.__emitChange();
      break;
    case PropertyConstants.FOCUSED_PROPERTY:
      reset_focusedProperty(payload.property);
      PropertyStore.__emitChange();
      break;
  }
};

module.exports = PropertyStore;
