var React = require('react');
var ApiUtil = require('../util/api_util');

var SignupForm = React.createClass({

	getInitialState: function() {
		return {username: "", password: ""};
	},

	handleSubmit: function(e) {
		e.preventDefault();
		ApiUtil.signUp(this.state);
		// Use router.replace('/properties') for the time being
	},

	updateName: function(e) {
		this.setState({ username: e.currentTarget.value });
	},

	updatePassword: function(e) {
		this.setState({ password: e.currentTarget.value });
	},

	_modelToggle: function(e) {
		e.preventDefault();
		$("#model-signup").removeClass("model-signup-is-active");
	},

	render: function() {
		return (
			<section id="model-signup" className="model-signup">
				<h1>
					<div>Please Sign Up</div>
				</h1>
				<p>
					Register for free to access all EasyStreets has to offer including premium data and advanced features.
				</p>

				<form onSubmit={this.handleSubmit} className="sign-in-form">
					<div className="sign-in-input">
						<label htmlFor="username">Username</label>
						<br/>
						<input onChange={this.updateName} type="text" value={this.state.username}/>
					</div>

					<div className="sign-in-input">
						<label htmlFor="password">Password</label>
						<br/>
						<input onChange={this.updatePassword} type="password" value={this.state.password}/>
					</div>

					<div className="sign-in-submit">
						<button>Submit</button>
					</div>

			    <div className="model-signup-screen" onClick={this._modelToggle}></div>

				</form>

			</section>
		);
	}

});

module.exports = SignupForm;
