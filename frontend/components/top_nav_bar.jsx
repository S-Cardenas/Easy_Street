var React = require('react');

var TopNavBar = React.createClass({


	render: function() {
		return(
			<div>
				<nav className="header-nav group">
					<h3 className="header-top-left">
						<a href="#">New York City</a>
						<a href="#">Blog</a>
					</h3>

					<h4 className="header-top-right">
						<a href="#">Sign In</a>
						<a href="#">Register(It's Free!)</a>
					</h4>
				</nav>
			</div>
		);
	}
});

module.exports = TopNavBar;
