var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var PropertyStore = new Store(AppDispatcher);
var PropertyConstants = require('../constants/property_constants');

var _properties = [];

var reset_properties = function(properties) {
  _properties = properties;
};

PropertyStore.all = function() {
  return _properties.slice(0);
};

PropertyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PropertyConstants.PROPERTIES_RECEIVED:
      reset_properties(payload.properties);
      PropertyStore.__emitChange();
      break;
  }
};

module.exports = PropertyStore;
