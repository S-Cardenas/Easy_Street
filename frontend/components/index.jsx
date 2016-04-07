var React = require('react');
var PropertyStore = require('../stores/property.js');
var BookmarkStore = require('../stores/bookmark_store.js');
var SessionStore = require('../stores/session_store.js');
var ApiUtil = require('../util/api_util.js');
var ApiActions = require('../actions/api_actions.js');
var Link = require('react-router').Link;

var PropertyIndex = React.createClass({
  getInitialState: function() {
    return { properties: PropertyStore.all(), bookmarks: BookmarkStore.all() };
  },

  componentDidMount: function() {
    this.propertyListener = PropertyStore.addListener(this._onChange);
		this.bookmarkListener = BookmarkStore.addListener(this._onChangeBookmark);
    ApiUtil.fetchProperties(this.props.apiCall, function() {
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
    this.setState({ properties: PropertyStore.all() });
  },

	_onChangeBookmark: function() {
		this.setState({ bookmarks: BookmarkStore.all()});
		this._bookmarkArray();
	},

	_bookmarkArray: function() {
		var arr = this.state.bookmarks.map(function(property) {
			return (property.id);
		});
		return arr;

	},

  _focusProperty: function(property) {
    ApiActions.focusedProperty(property);
  },

	_addBookmark: function(property) {
		ApiUtil.addBookmark(property);
	},

	_test: function() {
		return ('randomness');
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

module.exports = PropertyIndex;
