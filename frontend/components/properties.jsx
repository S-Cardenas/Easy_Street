var React = require('react');
var PropertiesIndex = require('./index.jsx');
var Map = require('./map.jsx');
var PropertyStore = require('../stores/property');
var ApiActions = require('../actions/api_actions');


var Properties = React.createClass({

  getInitialState: function() {
    return { focusedProperty: null };
  },

  componentDidMount: function() {
    this.listener = PropertyStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
    PropertyStore.resetProperties();
		ApiActions.focusedProperty(null);
  },

  _onChange: function() {
    this.setState({ focusedProperty: PropertyStore.focusedProperty() });
  },

  render: function() {
    return(
      <div className="properties-page group">
        <div className="content-left">
          <PropertiesIndex apiCall={'properties'} />
        </div>
        <div className="content-right">
          <Map focusedProperty={this.state.focusedProperty} />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Properties;
