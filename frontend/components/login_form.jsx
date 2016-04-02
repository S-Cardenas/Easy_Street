var React = require('react');
var ApiUtil = require('../util/api_util');

var LoginForm = React.createClass({

	getInitialState: function() {
		return {username: "", password: ""};
	},

	handleSubmit: function(e) {
		e.preventDefault();

		ApiUtil.login(this.state);

		// Use router.replace('/properties') for the time being
	},

	updateName: function(e) {
		this.setState({ username: e.currentTarget.value });
	},

	updatePassword: function(e) {
		this.setState({ password: e.currentTarget.value });
	},

	render: function() {
		return (
			<div>
				<h1>Please Log In</h1>

				<form onSubmit={this.handleSubmit}>
					<label htmlFor="username">Username</label>
					<input onChange={this.updateName} type="text" value={this.state.username}/>

					<label htmlFor="password">Password</label>
					<input onChange={this.updatePassword} type="password" value={this.state.password}/>

					<button>Submit</button>

				</form>

			</div>
		);
	}

});

module.exports = LoginForm;
