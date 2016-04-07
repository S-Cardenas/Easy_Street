var React = require('react');
var TopNavBar = require('./top_nav_bar.jsx');
var Footer = require('./footer.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div className="App">
				<TopNavBar />
        { this.props.children }
      </div>
    );
  }
});

module.exports = App;
