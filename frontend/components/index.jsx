var React = require('react');
var PropertyStore = require('../stores/property.js');
var ApiUtil = require('../util/api_util.js');
var ApiActions = require('../actions/api_actions.js');

var PropertyIndex = React.createClass({
  getInitialState: function() {
    return { properties: PropertyStore.all() };
  },

  componentDidMount: function() {
    this.propertyListener = PropertyStore.addListener(this._onChange);
    ApiUtil.fetchProperties();
  },

  componentWillUnmount: function() {
    this.propertyListener.remove();
  },

  _onChange: function() {
    this.setState({ properties: PropertyStore.all() });
  },

  _focusProperty: function(property) {
    ApiActions.focusedProperty(property);
  },

  render: function() {
    var myProperties = this.state.properties.map(function(property, i) {
      return (
          <ul className="property-listing" key={i} onMouseEnter={this._focusProperty.bind(null, property)}>
            <li className="property-address">
              {property.address}
            </li>
            <li className="property-price">
              {property.price} For Rent
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
