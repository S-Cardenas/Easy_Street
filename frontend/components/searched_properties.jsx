var React = require('react');
var SearchIndex = require('./search_index.jsx');
var Map = require('./map.jsx');
var SearchStore = require('../stores/property');
var ApiActions = require('../actions/api_actions');


var SearchedProperties = React.createClass({

  getInitialState: function() {
    return { focusedProperty: null };
  },

  componentDidMount: function() {
    this.listener = SearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
		ApiActions.focusedProperty(null);

  },

  _onChange: function() {
    this.setState({ focusedProperty: SearchStore.focusedProperty() });
  },

  render: function() {
    return(
      <div className="properties-page group">
        <div className="content-left">
          <SearchIndex apiCall={'properties'} query={this.props.location.query}/>
        </div>
        <div className="content-right">
          <Map focusedProperty={this.state.focusedProperty} />
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = SearchedProperties;
