var React = require('react');
var SessionStore = require('../stores/session_store.js');


var SignInComp = React.createClass({

		getInitialState: function() {
			return ({ loggedIn: false });
		},

		componentDidMount : function() {
			this.listener = SessionStore.addListener(this._onChange);
		},

		_onChange: function() {
			this.setState({ loggedIn: SessionStore.isLoggedIn() });
		},

		_loggedIn: function() {
			return( <h3 className="c">
								<a href="#">My Properties</a>
								<a href="#">My Searches</a>
							</h3>
						);
		},

		_loggedOut: function() {
		 	return (<h3 className="SignIn-Comp">
								<a href="#">Sign In</a>
								<a href="#">Register (It's Free)
								</a>
							</h3>
						);
		},

		render: function() {
			if (this.state.loggedIn) {
				return this._loggedIn();
			}
			else {
				return this._loggedOut();
			}

		}
});

var TopNavBar = React.createClass({

	render: function() {
		return(
			<div>
				<nav className="header-nav group">
					<h3 className="header-top-left">
						<a href="#">New York City
							<ul className="NYC-list">
								<li>New York City</li>
								<li>Northern New Jersey</li>
								<li>Hamptons</li>
							</ul>
						</a>

						<a href="#">Blog</a>
					</h3>

					<SignInComp />


				</nav>
			</div>
		);
	}
});

module.exports = TopNavBar;
