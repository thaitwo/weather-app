// ./components/search-bar.jsx

import React from 'react';
import { browserHistory } from 'react-router';
import Geosuggest from 'react-geosuggest';


// Search box for users to input city
class SearchBar extends React.Component {
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
    event.preventDefault();
    browserHistory.push(`/weather/${this.state.country}/${this.state.city}/${this.state.state}`);
  }

  handKeyPress(event) {
    if (event.key = 'Enter') {
      handleSubmit;
    }
  }

  // Sets the city that the user selects from the suggestions as the value ("city")
  onSuggestSelect(suggest) {
    let city = suggest.label.split(',')[0];
    city = city.split(' - ')[0];                  // Separate strings into substrings that are divided by ' - ' (space, dash, space)
    city = city.replace(/ /g,"_");                // Replaces all spaces with underscores

    let state = suggest.label.split(',')[1];
    console.log(state);

    let country = suggest.label.split(',').pop();
    country = country.trim();                     // Removes all spaces before or after string
    country = country.replace(/ /g,"_");          // Replaces all spaces with underscores

    // console.log(suggest);
    // Takes the data from the selected suggestion and sets the state
    this.setState({
      city: city,
      state: state,
      country: country
    });
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
        <input type="submit" value="Search" />
      </form>
    )
  }
}

    // onSuggestSelect={(suggest) => {
    //   this.onSuggestSelect(suggest);
    // }}

export default SearchBar;
