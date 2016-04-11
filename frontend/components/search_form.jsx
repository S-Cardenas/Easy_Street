var React = require('react');
var History = require('react-router').History;
var ApiUtil = require('../util/api_util.js');


var SearchForm = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {neighborhood: "any", areaLow: "any", areaHigh: "any", priceLow: "any", priceHigh: "any",
			 num_rooms: "any", num_bathroom: "any"
		};
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var query = {
      neighborhood: this.state.neighborhood,
      areaLow: this.state.areaLow,
      areaHigh: this.state.areaHigh,
      priceLow: this.state.priceLow,
      priceHigh: this.state.priceHigh,
      num_rooms: this.state.num_rooms,
      num_bathroom: this.state.num_bathroom
    };

    this.context.router.push({
      pathname: '/search',
      query: query,
      state: {}
    });

  },

  updateNeighborhood: function(e) {
    this.setState({ neighborhood: e.currentTarget.value });
  },

  updateAreaLow: function(e) {
    this.setState({ areaLow: e.currentTarget.value });
  },

  updateAreaHigh: function(e) {
    this.setState({ areaHigh: e.currentTarget.value });
  },

  updatePriceLow: function(e) {
    this.setState({ priceLow: e.currentTarget.value });
  },

  updatePriceHigh: function(e) {
    this.setState({ priceHigh: e.currentTarget.value });
  },

  updateNumRooms: function(e) {
    this.setState({ num_rooms: e.currentTarget.value });
  },

  updateNumBaths: function(e) {
    this.setState({ num_bathroom: e.currentTarget.value });
  },

  render: function() {
    return (
      <section className="search-property-div">
        <h1>New York City Real Estate</h1>
        <p>Fill in each detail below and then hit submit.</p>

        <form onSubmit={this.handleSubmit} className="search-property-form">

          <label htmlFor="address">Neighborhood</label>
          <br/>
          <select className="dropdown-select" onChange={this.updateNeighborhood}>
            <option value="any">Any</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Queens">Queens</option>
            <option value="Bronx">Bronx</option>
            <option value="Staten Island">Staten Island</option>
          </select>

          <br/>
          <label htmlFor="areaLow">Area Minimum</label>
          <br/>
          <select className="dropdown-select" onChange={this.updateAreaLow}>
            <option value="any">Any</option>
            <option value="500">500 ft²</option>
            <option value="1000">1000 ft²</option>
            <option value="1500">1500 ft²</option>
            <option value="2000">2000 ft²</option>
            <option value="2500">2500 ft²</option>
            <option value="3000">3000 ft²</option>
            <option value="3500">3500 ft²</option>
            <option value="4000">4000 ft²</option>
            <option value="4500">4500 ft²</option>
            <option value="5000">5000 ft²</option>
            <option value="5500">5500 ft²</option>
            <option value="6000">6000 ft²</option>
            <option value="6500">6500 ft²</option>
            <option value="7000">7000 ft²</option>
            <option value="7500">7500 ft²</option>
          </select>

          <br/>
          <label htmlFor="areaHigh">Area Maximum</label>
          <br/>
          <select className="dropdown-select" onChange={this.updateAreaHigh}>
            <option value="any">Any</option>
            <option value="500">500 ft²</option>
            <option value="1000">1000 ft²</option>
            <option value="1500">1500 ft²</option>
            <option value="2000">2000 ft²</option>
            <option value="2500">2500 ft²</option>
            <option value="3000">3000 ft²</option>
            <option value="3500">3500 ft²</option>
            <option value="4000">4000 ft²</option>
            <option value="4500">4500 ft²</option>
            <option value="5000">5000 ft²</option>
            <option value="5500">5500 ft²</option>
            <option value="6000">6000 ft²</option>
            <option value="6500">6500 ft²</option>
            <option value="7000">7000 ft²</option>
            <option value="7500">7500 ft²</option>
          </select>

          <br/>
          <label htmlFor="priceLow">Price Low</label>
          <br/>
          <select className="dropdown-select" onChange={this.updatePriceLow}>
            <option value="any">Any</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
            <option value="1500">$1500</option>
            <option value="2000">$2000</option>
            <option value="2500">$2500</option>
            <option value="3000">$3000</option>
            <option value="3500">$3500</option>
            <option value="4000">$4000</option>
            <option value="4500">$4500</option>
            <option value="5000">$5000</option>
            <option value="5500">$5500</option>
            <option value="6000">$6000</option>
            <option value="6500">$6500</option>
            <option value="7000">$7000</option>
            <option value="7500">$7500</option>
          </select>

          <br/>
          <label htmlFor="priceHigh">Price High</label>
          <br/>
          <select className="dropdown-select" onChange={this.updatePriceHigh}>
            <option value="any">Any</option>
            <option value="500">$500</option>
            <option value="1000">$1000</option>
            <option value="1500">$1500</option>
            <option value="2000">$2000</option>
            <option value="2500">$2500</option>
            <option value="3000">$3000</option>
            <option value="3500">$3500</option>
            <option value="4000">$4000</option>
            <option value="4500">$4500</option>
            <option value="5000">$5000</option>
            <option value="5500">$5500</option>
            <option value="6000">$6000</option>
            <option value="6500">$6500</option>
            <option value="7000">$7000</option>
            <option value="7500">$7500</option>
          </select>

          <br/>
          <label htmlFor="numRooms">Number of Rooms</label>
          <br/>
          <select className="dropdown-select" onChange={this.updateNumRooms}>
            <option value="any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>

          <br/>
          <label htmlFor="numBaths">Number of Bathrooms</label>
          <br/>
          <select className="dropdown-select" onChange={this.updateNumBaths}>
            <option value="any">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>

          <br/>

          <button type='submit' className="search-button">Submit</button>

        </form>

      </section>
    );
  }

});

module.exports = SearchForm;
