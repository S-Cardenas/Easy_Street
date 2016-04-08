var React = require('react');
var ApiUtil = require('../util/api_util');
var SessionStore = require('../stores/session_store.js');
var History = require('react-router').History;

var AddProperty = React.createClass({

	mixins: [ History ],

	getInitialState: function() {
		return {address: "", description: "", area: "", price: "",
			 num_rooms: "", num_bathroom: "", borough_id: "", availability: "",
			  lat: "", lng: "", imageFiles: [], imageUrls: []
		};
	},

	loadFile: function(file) {
		var reader = new FileReader();
		reader.onloadend = function() {
		  this.setState({
				imageUrls: this.state.imageUrls.concat([reader.result]),
				imageFiles: this.state.imageFiles.concat([file])
			});
		}.bind(this);

		reader.readAsDataURL(file);

	},

	handleFileChange: function(e) {
		var files = e.currentTarget.files;

		for (var i = 0; i < files.length; i++) {
			this.loadFile(files[i]);
		}
	},

	handleSubmit: function() {
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
					this.history.pushState(null, "properties/" + property.id);
				}.bind(this));
			}
			else {
				console.log('didnt find the address');
			}
		}.bind(this));
	},

	updateAddress: function(e) {
		this.setState({ address: e.currentTarget.value });
	},

	updateDescription: function(e) {
		this.setState({ description: e.currentTarget.value });
	},

	updateArea: function(e) {
		this.setState({ area: parseInt(e.currentTarget.value) });
	},

	updatePrice: function(e) {
		this.setState({ price: parseInt(e.currentTarget.value) });
	},

	updateNumRooms: function(e) {
		this.setState({ num_rooms: parseInt(e.currentTarget.value) });
	},

	updateBathRooms: function(e) {
		this.setState({ num_bathroom: parseInt(e.currentTarget.value) });
	},

	updateBorough: function(e) {
		this.setState({ borough_id: parseInt(e.currentTarget.value) });
	},

	updateAvailability: function(e) {
		this.setState({ availability: e.currentTarget.value });
	},


	render: function() {

		return (
			<section className="add-property-div">
				<h1>
					<div>Please Add Your Property</div>
				</h1>
				<p>
					Fill in each detail below and then hit submit.
				</p>

				<form onSubmit={this.handleSubmit} className="add-property-form">
					<div className="add-property-input">
						<label htmlFor="address">Address</label>
						<br/>
						<input className="address-input" onChange={this.updateAddress} type="text" value={this.state.address}/>
					</div>

					<div className="add-property-input">
						<label htmlFor="description">Description</label>
						<br/>
						<textarea onChange={this.updateDescription} value={this.state.description}/>
					</div>

					<div className="add-property-input">
						<label htmlFor="area">Area(ft^2)</label>
						<br/>
						<input className='numeric-input' onChange={this.updateArea} type="number" value={this.state.area}/>
					</div>

					<div className="add-property-input">
						<label htmlFor="price">Price $</label>
						<br/>
						<input className='numeric-input' onChange={this.updatePrice} type="number" value={this.state.price}/>
					</div>

					<div className="add-property-input">
						<label htmlFor="num_rooms">Number of Rooms</label>
						<br/>
						<input className='numeric-input' onChange={this.updateNumRooms} type="number" value={this.state.num_rooms}/>
					</div>

					<div className="add-property-input">
						<label htmlFor="num_bathroom">Number of Bathrooms</label>
						<br/>
						<input className='numeric-input' onChange={this.updateBathRooms} type="number" value={this.state.num_bathroom}/>
					</div>

					<div className="add-property-input">
						<label htmlFor="borough">Borough</label><br/>
						<input type="radio" onChange={this.updateBorough} name="borough" value="1"/>Manhattan<br/>
						<input type="radio" onChange={this.updateBorough} name="borough" value="2"/>Brooklyn<br/>
						<input type="radio" onChange={this.updateBorough} name="borough" value="3"/>Queens<br/>
						<input type="radio" onChange={this.updateBorough} name="borough" value="4"/>Bronx<br/>
						<input type="radio" onChange={this.updateBorough} name="borough" value="5"/>Staten Island<br/>
					</div>

					<br/>

					<div className="add-property-input">
						<label htmlFor="availability">Available</label><br/>
							<input type="radio" onChange={this.updateAvailability} name="availability" value="true"/>True<br/>
							<input type="radio" onChange={this.updateAvailability} name="availability" value="false"/>False<br/>
					</div>

					<br/>

					<div className="add-property-input">
						<label htmlFor="images">Upload Images</label><br/>
							<input type="file" onChange={this.handleFileChange} name="img" multiple/>
					</div>

					<button type='submit'>Submit</button>

				</form>
			</section>
		);
	}

});

module.exports = AddProperty;
