var React = require('react');
var PropertyStore = require('../stores/property.js');
var ApiUtil = require('../util/api_util.js');

var MyMap = React.createClass({

  _markers: [],

  componentDidMount: function(){
    this._initializeMap(function () {
      this._placeMarker(this.props);
    }.bind(this));
    // this.propertyStorelistener = PropertyStore.addListener(this._onChange);

  },

  componentWillUnmount: function() {
    google.maps.event.clearListeners(this.map, 'tiles loaded');
  },

  componentWillReceiveProps: function (newProps) {
    this._placeMarker(newProps);
  },

  _onChange: function() {
    // debugger
    // this._placeMarker();
  },

  _placeMarker: function(props) {
    // var focusedProperty = PropertyStore.focusedProperty();
    var focusedProperty = props.focusedProperty;
    if (!focusedProperty) return;


    for ( var i = 0; i < this._markers.length; i++ ) {
          this._markers[i].setMap( null );
        }

    this._markers = [];

    var markerPosition= {
      lat: focusedProperty.lat,
      lng: focusedProperty.lng
    };

    var marker = new google.maps.Marker({
      position: markerPosition,
      title: focusedProperty.address
    });

    marker.setMap(this.map);
    this.map.setCenter(markerPosition);
    this._markers.push(marker);
  },

  _initializeMap: function(cb) {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 40.731600, lng: -73.997022},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    google.maps.event.addListener(this.map, "tilesloaded", cb);
  },

  render: function() {
    // console.log('easd');
    // this._placeMarker();

    return (
      <div className="map" ref="map">
      </div>
    );
  }

});

module.exports = MyMap;
