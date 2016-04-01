var React = require('react');
var PropertyInfo = require('./property_info.jsx');
var ImgShow = require('./img_show.jsx');
var Map = require('./map.jsx');
var PropertyStore = require('../stores/property');
var ApiUtil = require('../util/api_util.js');

var Property = React.createClass({

  getInitialState: function() {
    return { focusedProperty: PropertyStore.focusedProperty() };
  },

  componentDidMount: function() {
    this.listener = PropertyStore.addListener(this._onChange);
    ApiUtil.fetchProperty(this.props.params.id);
  },

  componentWillReceiveProps: function(newProps) {
    // this.setState({focusedProperty: PropertyStore.focusedProperty() });
    ApiUtil.fetchProperty(newProps.params.id);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ focusedProperty: PropertyStore.focusedProperty() });
  },

  render: function() {
    if(!this.state.focusedProperty) {
      return(
        <div>loading show page.....</div>
      );
    }
    else {
      return (
        <div className="property-show-page">
          <PropertyInfo focusedProperty={this.state.focusedProperty}/>
					<ImgShow focusedProperty={this.state.focusedProperty} />
          <Map focusedProperty={this.state.focusedProperty}/>
        </div>
      );
    }
  }
});


module.exports = Property;
