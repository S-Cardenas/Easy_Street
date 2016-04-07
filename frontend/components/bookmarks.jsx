var React = require('react');
var PropertiesIndex = require('./index.jsx');
var Map = require('./map.jsx');
var PropertyStore = require('../stores/property');
var ApiActions = require('../actions/api_actions');

var Bookmarks = React.createClass({
	getInitialState: function() {
		return { focusedProperty: null };
	},

	componentDidMount: function() {
		this.listener = PropertyStore.addListener(this._onChange);
	},

	componentWillUnmount: function() {
		this.listener.remove();
		ApiActions.focusedProperty(null);
	},

	_onChange: function() {
		this.setState({ focusedProperty: PropertyStore.focusedProperty() });
	},

	render: function() {
		return(
			<div className="properties-page group">
				<PropertiesIndex apiCall={'bookmarks'} />
				<Map focusedProperty={this.state.focusedProperty} />
				{this.props.children}
			</div>
		);
	}
});

module.exports = Bookmarks;
