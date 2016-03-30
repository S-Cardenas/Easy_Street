var React = require('react');
var PropertiesIndex = require('./index.jsx');
var Map = require('./map.jsx');
var PropertyStore = require('../stores/property');


var Properties = React.createClass({

  getInitialState: function() {
    return { focusedProperty: PropertyStore.focusedProperty() };
  },

  componentDidMount: function() {
    this.listener = PropertyStore.addListener(this._onChange);

  },

  componentWillunmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ focusedProperty: PropertyStore.focusedProperty() });
  },

  render: function() {
    return(
      <div className="properties-page">
        <PropertiesIndex />
        <Map focusedProperty={this.state.focusedProperty} />
        {this.props.children}
      </div>
    );
  }
});

module.exports = Properties;
