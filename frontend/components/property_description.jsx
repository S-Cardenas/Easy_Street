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
				<div className="property-description">
					<h1>Description</h1>
					<p>
						{this.props.focusedProperty.description}
					</p>
				</div>
			);
		}
	}
});

module.exports = Description;
