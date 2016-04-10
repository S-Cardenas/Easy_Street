var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var SearchStore = new Store(AppDispatcher);
var PropertyConstants = require('../constants/property_constants');

var _properties = [];
var _focusedProperty = null;

var reset_properties = function(properties) {
  _properties = properties;
};

var reset_focusedProperty = function(property) {
  _focusedProperty = property;
};

SearchStore.all = function() {
  return _properties.slice(0);
};

SearchStore.focusedProperty = function() {
  return _focusedProperty;
};

SearchStore.resetFocusedProperty = function() {
	_focusedProperty = null;
};

SearchStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PropertyConstants.SEARCH_RECEIVED:
      reset_properties(payload.properties);
      SearchStore.__emitChange();
      break;
    case PropertyConstants.FOCUSED_PROPERTY:
      reset_focusedProperty(payload.property);
      SearchStore.__emitChange();
      break;
  }
};

module.exports = SearchStore;
