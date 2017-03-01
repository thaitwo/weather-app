import React from 'react';
import Geosuggest from 'react-geosuggest';

// Search box for users to input city
class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { city: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert('City: ' + this.state.city);
    event.preventDefault();
  }

  handKeyPress(event) {
    if (event.key = 'Enter') {
      this.handleSubmit;
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Geosuggest
          placeholder="Search city"
          types={['(cities)']}
          value={this.state.city}
          onKeyPress={this.handleKeyPress}
          onChange={this.handleChange}
          onSuggestSelect={this.onSuggestSelect.bind(this)}
        />
        <input type="submit" value="Search" />
      </form>
    )
  }

  onSuggestSelect(suggest) {
    console.log(suggest.label);
    this.setState({city: suggest.label});
  }
}

export default SearchBar;
