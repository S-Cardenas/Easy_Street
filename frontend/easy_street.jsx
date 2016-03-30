var React = require('react');
var ReactDOM = require('react-dom');
var PropertyIndex = require('./components/index.jsx');




document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <PropertyIndex />,
    document.getElementById('content')
  );
});
