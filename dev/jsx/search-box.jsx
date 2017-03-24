// ./jsx/search-box.jsx

import React from 'react';
import { browserHistory } from 'react-router';
import Geosuggest from 'react-geosuggest';
import _ from 'lodash';

// Search box for users to input city
class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      state: '',
      country: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  // When user submits a city, create a link using the data obtained from the selected suggestion
  handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }

    // Check and see if search form has an input value. If yes, create a link. If not, do nothing.
    if (this.state.city && this.state.country) {
      browserHistory.push(`/weather/${this.state.country}/${this.state.city}/${this.state.state}`);
    }
  }

  // Set the city that the user selects from the suggestions as the value
  onSuggestSelect(suggest) {
    // GET CITY VALUE
    // Get first substring from string
    let city = suggest.gmaps.formatted_address.split(',')[0];

    // Check and see if city value contains ' - '
    if (city.includes(' - ')) {
      // Separate strings into substrings that are divided by ' - '
      city = city.split(' - ')[0];
    }
    // Check and see if city value contains spaces
    if (city.includes(' ')) {
      // Replace all spaces with underscores
      city = city.replace(/ /g,"_");
    }
    // Convert city value to lowercase
    city = city.toLowerCase();

    // GET COUNTRY VALUE
    // Get the very last substring from string
    let country = suggest.gmaps.formatted_address.split(',').pop();
    // Remove all spaces before and after string
    country = country.trim();
    // Replaces all spaces with underscores
    country = country.replace(/ /g,"_");
    // Convert string value to lowercase
    country = country.toLowerCase();

    // GET STATE VALUE
    let state;
    // Only get the state value if the city is in the US
    if (country === 'usa') {
      // Get the value for the state info (format is "City, ST, United States")
      let stateInfo = suggest.label;

      // Get 'state' value by spliting entire string separated by commas and getting 2nd string
      state = _.split(stateInfo, ',')[1];
      // Remove all spaces before and after string
      state = _.trim(state);
      // Convert string value to lowercase
      state = state.toLowerCase();
    }

    // Takes the data from the selected suggestion and sets the state
    this.setState({
      city: city,
      state: state,
      country: country
    });

    this.handleSubmit();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Geosuggest
          placeholder="Search city"
          types={['(cities)']}
          value={this.state.city}
          onSuggestSelect={this.onSuggestSelect}
        />
        <button type="submit" className="search-button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    )
  }
}

export default SearchBox;
