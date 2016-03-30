var React = require('react');
var PropertyStore = require('../stores/property.js');
var ApiUtil = require('../util/api_util.js');



var MyMap = React.createClass({

  _markers: [],

  componentDidMount: function(){
    this._initializeMap();
    this._placeMarker();
  },

  _placeMarker: function() {
    if (!this.props.focusedProperty) return;

    for ( var i = 0; i < this._markers.length; i++ ) {
          this._markers[i].setMap( null );
        }

    this._markers = [];

    var markerPosition= {
      lat: this.props.focusedProperty.lat,
      lng: this.props.focusedProperty.lng
    };

    var marker = new google.maps.Marker({
      position: markerPosition,
      title: this.props.focusedProperty.address
    });

    marker.setMap(this.map);
    this.map.setCenter(markerPosition);
    this._markers.push(marker);
  },

  _initializeMap: function() {
    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: {lat: 40.731600, lng: -73.997022},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  render: function() {
    this._placeMarker();

    return (
      <div className="map" ref="map">
      </div>
    );
  }

});

module.exports = MyMap;
