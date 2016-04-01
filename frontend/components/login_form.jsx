var React = require('react');
var ApiUtil = require('../util/api_util');

var LoginForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {name: "", password: ""};
	},

	handleSubmit: function(e) {
		e.preventDefault();

		var router = this.context.router;

		ApiUtil.login(this.state, function() {
			router.push("/bookmarks");
		});
		// Use router.replace('/properties') for the time being
	},

	updateName: function(e) {
		this.setState({ name: e.currentTarget.value });
	},

	updatePassword: function(e) {
		this.setState({ password: e.currentTarget.value });
	},

	render: function() {
		return (
			<div>
				<h1>Please Log In</h1>

				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name</label>
					<input onChange={this.updateName} type="text" value={this.state.name}/>

					<label htmlFor="password">Password</label>
					<input onChange={this.updatePasword} type="password" value={this.state.password}/>

					<button>Submit</button>

				</form>

			</div>
		);
	}

});

module.exports = LoginForm;
