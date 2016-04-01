var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ImageStore = new Store(AppDispatcher);
var ImageConstants = require('../constants/image_constants');

var _images = [];
var _focusedImage = null;

var resetImages = function(images) {
  _images = images;
};

var resetFocusedImage = function(image) {
  _focusedImage = image;
};

ImageStore.all = function() {
  return _images.slice(0);
};

ImageStore.focusedImage = function() {
  return _focusedImage;
};

ImageStore.removeFocusedImage = function() {
	_focusedImage = null;
};

ImageStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case ImageConstants.IMAGES_RECEIVED:
      resetImages(payload.image);
      ImageStore.__emitChange();
      break;
    case ImageConstants.FOCUSED_IMAGE:
      resetFocusedImage(payload.image);
      ImageStore.__emitChange();
      break;
  }
};

module.exports = ImageStore;
