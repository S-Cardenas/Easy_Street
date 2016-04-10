var React = require('react');
var SearchStore = require('../stores/search.js');
var BookmarkStore = require('../stores/bookmark_store.js');
var SessionStore = require('../stores/session_store.js');
var ApiUtil = require('../util/api_util.js');
var ApiActions = require('../actions/api_actions.js');
var Link = require('react-router').Link;

var SearchIndex = React.createClass({
  getInitialState: function() {
    return { properties: SearchStore.all(), bookmarks: BookmarkStore.all() };
  },

  componentDidMount: function() {
    this.propertyListener = SearchStore.addListener(this._onChange);
		this.bookmarkListener = BookmarkStore.addListener(this._onChangeBookmark);
    ApiUtil.searchProperties(this.props.query, function() {
  		if (SessionStore.currentUser()) {
  			ApiUtil.fetchBookmarks();
  		}
    });
  },

  componentWillUnmount: function() {
    this.propertyListener.remove();
		this.bookmarkListener.remove();
  },

  _onChange: function() {
    this.setState({ properties: SearchStore.all() });
  },

	_bookmarkArray: function() {
		var arr = BookmarkStore.all().map(function(bookmark) {
			return (bookmark.property_id);
		});

		return arr;
	},

	_onChangeBookmark: function() {
		this._bookmarkArray();
		this.setState({ bookmarks: BookmarkStore.all()});
	},

  _focusProperty: function(property) {
    ApiActions.focusedProperty(property);
  },

	_addBookmark: function(property) {
		ApiUtil.addBookmark(property);
	},

	_removeBookmark: function(property) {
		var bookmarkId = null;
		for (var i = 0; i < this.state.bookmarks.length; i++) {
			if (this.state.bookmarks[i].id === property.id) {
				bookmarkId = this.state.bookmarks[i].bookmarkId;
			}
		}
		var bookmark = { property_id: property.id, author_id: SessionStore.currentUser().id};
		ApiUtil.removeBookmark(bookmark, bookmarkId);
	},

  render: function() {
    var myProperties = this.state.properties.map(function(property, i) {
			var button = null;
			if (this._bookmarkArray().includes(property.id)) {
				button = <button className="bookmark-button-saved">Saved</button>;
			}
			else {
				button = <button className="bookmark-button" onClick={this._addBookmark.bind(null, property)}>BookMark</button>;
			}

			return(
				<div className="property-item group"  key={i} onMouseEnter={this._focusProperty.bind(null, property)} >
					<Link to={"/properties/" + property.id }>
						<img src={property.pic_url} />
	          <ul className="property-listing">
	            <li className="property-address">
	              {property.address}
	            </li>
	            <li className="property-price">
	              ${property.price} For Rent
	            </li>
	            <li>
	              {property.num_rooms} rooms
	            </li>
	            <li>
	              {property.num_bathroom} baths
	            </li>
	            <li>
	              {property.area} ft²
	            </li>
	            <li>
	              Property in {property.borough_id}
	            </li>
	            <li>
	              Listed by {property.author_id}
	            </li>
	          </ul>
					</Link>
					{button}
				</div>
      );
    }.bind(this));

    return (
      <ul className="property-index">
        { myProperties }
      </ul>

    );
  }
});

module.exports = SearchIndex;
