var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var App = require('./components/app.jsx');
var Properties = require('./components/properties.jsx');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="properties" component={Properties} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    routes,
    document.getElementById('content')
  );
});

//
// var Search = React.createClass({
//   render: function () {
//     return (
//       <div>SEARCH</div>
//     );
//   }
// });
//
// var App = React.createClass({
//   render: function () {
//     return (
//       <div>{this.props.children}</div>
//     );
//   }
// });
//
// var router = (
//    <Router>
//      <Route path="/" component={App}>
//        <IndexRoute component={Search}/>
//        <Route path="properties" component={PropertyIndex}/>
//      </Route>
//   </Router>
// );
