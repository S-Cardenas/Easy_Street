var React = require('react');
var ImageStore = require('../stores/image');
var ApiActions = require('../actions/api_actions.js');
var PropertyStore = require('../stores/property');
var AppDispatcher = require('../dispatcher/dispatcher');

var Images = React.createClass({

	getInitialState: function() {
		return { focusedImage: ImageStore.focusedImage() };
	},

	componentDidMount: function() {
		this.imageListener = ImageStore.addListener(this._onChange);
		// this._focusImage(this.props.focusedProperty.pictures[0]);
	},

	componentWillUnmount: function() {
		this.imageListener.remove();
	},

	_onChange: function() {
		this.setState({ focusedImage: ImageStore.focusedImage() });
	},

	_focusImage: function(image) {
		// setTimeout(function () {
			ApiActions.focusImage(image);
		// }, 0);
	},

	render: function() {
		if (!this.props.focusedProperty) {
			return(
				<p>loading...</p>
			);
		}
		else {
			debugger;
			var myImages = this.props.focusedProperty.pictures.map(function(picture, i) {
				return (
					<li className="images-item" key={i} onMouseEnter={this._focusImage.bind(null, picture)}>
						<img src={picture.url} alt="#"/>
					</li>
				);
			}.bind(this));

			var MainImage = this.state.focusedImage? this.state.focusedImage : this.props.focusedProperty.pictures[0];

			return (
				<div className="images-container">
					<div className="images-item-main">
						<img src={MainImage.url} alt="#"/>
					</div>
					<ul className="images-list">
						{ myImages }
					</ul>
				</div>
			);
		}
	}
});

module.exports = Images;
