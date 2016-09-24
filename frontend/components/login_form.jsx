var React = require('react');
var ApiUtil = require('../util/api_util');
var SessionStore = require('../stores/session_store.js');

var LoginForm = React.createClass({

	getInitialState: function() {
		return {username: "", password: ""};
	},

	handleSubmit: function(e) {
		e.preventDefault();
		ApiUtil.login(this.state, function() {
			if (SessionStore.currentUser()) {
				ApiUtil.fetchBookmarks();
			}
		});
		// Use router.replace('/properties') for the time being
	},

	updateName: function(e) {
		this.setState({ username: e.currentTarget.value });
	},

	updatePassword: function(e) {
		this.setState({ password: e.currentTarget.value });
	},

	_modalToggle: function(e) {
		e.preventDefault();
		$(".modal").removeClass("is-open");
	},

	render: function() {
		return (

			<div className="modal">
				<section className="modal-form">
					<h1>
						<div>Please Log In</div>
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
					</form>
				</section>

				<div className="modal-screen js-modal-close" onClick={this._modalToggle}>
				</div>
			</div>


		);
	}

});

module.exports = LoginForm;
