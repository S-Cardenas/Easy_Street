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
        <ul className="property-show-details">
          <li className="property-address-show">
            {this.props.focusedProperty.address}
          </li>
          <li className="property-price-show">
            <b>${this.props.focusedProperty.price}</b> For Rent
          </li>
          <li className="property-show-rooms">
            {this.props.focusedProperty.num_rooms} rooms
          </li>
          <li className="property-show-baths">
            {this.props.focusedProperty.num_bathroom} baths
          </li>
          <li>
            Area: {this.props.focusedProperty.area} ft²
          </li>
          <li className="property-show-property">
            Property in {this.props.focusedProperty.borough}
          </li>
          <li className="property-show-author">
            Listed by {this.props.focusedProperty.author}
          </li>
        </ul>
      );
    }
  }

});

module.exports = PropertyInfo;
