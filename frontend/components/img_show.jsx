var React = require('react');
var ImageStore = require('../stores/image');


var Images = React.createClass({

	render: function() {
		if (!this.props.focusedProperty) {
			return(
				<p>loading...</p>
			);
		}
		else {
			var myImages = this.props.focusedProperty.pictures.map(function(picture, i) {
				return (
					<li className="images-item" key={i}>
						<img src={picture.url} alt="#"/>
					</li>
				);
			}.bind(this));

			return (
				<ul className="images-list">
					{ myImages }
				</ul>
			);
		}
	}
});

module.exports = Images;
