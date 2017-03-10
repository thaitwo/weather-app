// ./jsx/search-bar.jsx

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

  // Sets the city that the user selects from the suggestions as the value ("city")
  onSuggestSelect(suggest) {
    let city = suggest.label.split(',')[0];
    city = city.split(' - ')[0];                  // Separate strings into substrings that are divided by ' - ' (space, dash, space)
    city = city.replace(/ /g,"_");                // Replaces all spaces with underscores
    city = city.toLowerCase();

    let state = suggest.label.split(',')[1];
    state = state.trim();
    state = state.toLowerCase();

    let country = suggest.label.split(',').pop();
    country = country.trim();                     // Removes all spaces before or after string
    country = country.replace(/ /g,"_");          // Replaces all spaces with underscores
    country = country.toLowerCase();




    // // Sample Loop #1
    // let words = ['you', 'bot', 'none'];

    // for (let e = 0; e < words.length; e++) {
    //   console.log(words[e]);
    // }

    // // Alternative
    // let x;
    // for (x in words) {
    //   console.log(words[x]);
    // }

    // // Sample Loop #2
    // for (let i = 0; i < 10; i++) {
    //   console.log(i);
    // }

    // // Sample Loop #3
    // const listWords = words.map((word) =>
    //   <li key={word.toString()}>{word}</li>
    // );

    // console.log({listWords});




    // Takes the data from the selected suggestion and sets the state
    this.setState({
      city: city,
      state: state,
      country: country
    });
  }

  render() {
    return (
      <form className="search-bar" onSubmit={this.handleSubmit}>
        <Geosuggest
          placeholder="Search city"
          types={['(cities)']}
          value={this.state.city}
          onSuggestSelect={this.onSuggestSelect}
        />
        <button type="submit" value="Search" className="button"><i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    )
  }
}

export default SearchBar;
