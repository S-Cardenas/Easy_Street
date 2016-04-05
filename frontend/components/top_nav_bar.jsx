var React = require('react');
var SessionStore = require('../stores/session_store.js');
var LoginForm = require('./login_form.jsx');
var Link = require('react-router').Link;

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
			return( <h3 className="SignIn-Comp">
								<a href="#">Account Info</a>
								<a href="#">My Bookmarks</a>
							</h3>
						);
		},

		_modelToggle: function(e) {
			e.preventDefault();
			$("#model").addClass("model-is-active");
		},

		_loggedOut: function() {
		 	return (<h3 className="SignIn-Comp">
								<a href="#" onClick={this._modelToggle}>Sign In</a>
								<a href="#">Register (It's Free)</a>
								<LoginForm />
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
				<nav className="header-nav-top group">
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

				<nav className="header-nav-bottom group">
					<h3 className="header-bottom-left">
						<p>EasyStreets</p>
						<ul>
							<li>
								<Link to={"/properties"}>ALL PROPERTIES</Link>
							</li>
							<li>RENTALS</li>
							<li>RESOURCES
								<ul className="resources-list">
									<li>Browse</li>
									<li>Market Data</li>
									<li>Mortgage</li>
									<li>Tools</li>
								</ul>
							</li>
						</ul>
					</h3>

					<span>Search Bar</span>

				</nav>


			</div>
		);
	}
});

module.exports = TopNavBar;
