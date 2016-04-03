var React = require('react');
var ApiUtil = require('../util/api_util.js');
var PropertyStore = require('../stores/property');

var Description = React.createClass({
	render: function () {
		if (!this.props.focusedProperty) {
			return(
				<p>loading...</p>
			);
		}
		else {
			return (
				<p className="property-description">
					{this.props.focusedProperty.description}
				</p>
			);
		}
	}
});

module.exports = Description;
