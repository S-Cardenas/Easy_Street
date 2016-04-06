var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var App = require('./components/app.jsx');
var Properties = require('./components/properties.jsx');
var Property = require('./components/property.jsx');
var AddProperty = require('./components/add_property.jsx');

var SessionStore = require('./stores/session_store.js');
var ApiUtil = require('./util/api_util.js');

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App} onEnter={ApiUtil.fetchCurrentUser}>
      <Route path="properties" component={Properties} />
      <Route path="properties/:id" component={Property} />
			<Route path="addproperty" component={AddProperty} />
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    routes,
    document.getElementById('content')
  );
});

// function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
//   if (!SessionStore.currentUserHasBeenFetched()) {
//     ApiUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
//   } else {
//     _redirectIfNotLoggedIn();
//   }
//
//   function _redirectIfNotLoggedIn() {
//     if (!SessionStore.isLoggedIn()) {
//       replace("/login");
//     }
//
//     asyncCompletionCallback();
//   }
// }

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
