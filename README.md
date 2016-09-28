##**EasyStreets**

EasyStreets is a web application used to showcase and upload New York City property
listings in a StreetEasy.com inspired setup.

Take a look at <a href='easystreets.herokuapp.com'>EasyStreets Live</a>

##**Views**
<img src="./readme/easy1.JPG" width="800px"/>
<img src="./readme/easy2.JPG" width="800px"/>
<img src="./readme/easy3.JPG" width="800px"/>
<img src="./readme/easy4.JPG" width="800px"/>
<img src="./readme/easy5.JPG" width="800px"/>

##**Features**
* Enables dynamic location-based property search using Google Maps API
* Submit New Properties to the site
* Uploads multiple real estate pictures simultaneously to Amazon S3
* Provides fast multi-search based on user specified parameters
* Indexes Data for fast database multi-search
* Allows users to bookmark the properties they are interested in
* Background automatically changes to simulate traveling through NYC

##**Technical Highlights**

**Property Geolocation**<br/>
One of the more nifty features of the app. When a user submits a property to the site,
the google maps API is used to locate the real-world coordinates (latitude and longitude)
of the site. These coordinates are then made a part of the model object and stored in the
PostgreSQL database.

```
// Find the real world property and attach image files. Submit to backend.
handleSubmit: function(e) {
  e.preventDefault();
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'address': this.state.address}, function(results, status){

    if (status == google.maps.GeocoderStatus.OK) {
      var latResult = results[0].geometry.location.lat();
      var lngResult = results[0].geometry.location.lng();
      this.setState({ lat: latResult, lng: lngResult });

      var formData = new FormData();

      formData.append("property[address]", this.state.address);
      formData.append("property[description]", this.state.description);
      formData.append("property[area]", this.state.area);
      formData.append("property[price]", this.state.price);
      formData.append("property[num_rooms]", this.state.num_rooms);
      formData.append("property[num_bathroom]", this.state.num_bathroom);
      formData.append("property[borough_id]", this.state.borough_id);
      formData.append("property[availability]", this.state.availability);
      formData.append("property[lat]", latResult);
      formData.append("property[lng]", lngResult);

      for (var j = 0; j < this.state.imageFiles.length; j++) {
        formData.append("property[images][" + j + "]", this.state.imageFiles[j]);
      }

      ApiUtil.createProperty(formData, function(property) {
        this.context.router.push('/properties/' + property.id);
      }.bind(this));

    }
    else {
      console.log('didnt find the address');
    }
  }.bind(this));
},
```
