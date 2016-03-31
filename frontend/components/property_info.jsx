var React = require('react');
var ApiUtil = require('../util/api_util.js');
var PropertyStore = require('../stores/property');

var PropertyInfo = React.createClass({
  // getInitialState: function() {
  //   return { property: PropertyStore.focusedProperty() };
  // },
  // componentDidMount: function() {
  //   this.propertyListener = PropertyStore.addListener(this._onChange);
  // },
  //
  // componentWillUnmount: function() {
  //   this.propertyListener.remove();
  // },
  //
  // _onChange: function() {
  //   this.setState({ property: PropertyStore.focusedProperty()});
  // },

  render: function() {

    if (!this.props.focusedProperty) {
      return(
        <p>loading...</p>
      );
    }
    else {
      return (
        <ul className="property-index">
          <li className="property-address">
            {this.props.focusedProperty.address}
          </li>
          <li className="property-price">
            ${this.props.focusedProperty.price} For Rent
          </li>
          <li>
            {this.props.focusedProperty.num_rooms} rooms
          </li>
          <li>
            {this.props.focusedProperty.num_bathroom} baths
          </li>
          <li>
            {this.props.focusedProperty.area} ft²
          </li>
          <li>
            Property in {this.props.focusedProperty.borough_id}
          </li>
          <li>
            Listed by {this.props.focusedProperty.author_id}
          </li>
        </ul>
      );
    }
  }

});

module.exports = PropertyInfo;
