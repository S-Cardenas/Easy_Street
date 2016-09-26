var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var BookmarkStore = new Store(AppDispatcher);
var BookmarkConstants = require('../constants/bookmark_constants.js');

var _bookmarks = [];

var resetBookmarks = function(bookmarks) {
  _bookmarks = bookmarks;
};

BookmarkStore.resetBookmarks = function() {
  _bookmarks = [];
};

BookmarkStore.all = function() {
  return _bookmarks.slice(0);
};

BookmarkStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case BookmarkConstants.BOOKMARKS_RECEIVED:
      resetBookmarks(payload.bookmarks);
      BookmarkStore.__emitChange();
      break;
	}
};

module.exports = BookmarkStore;
