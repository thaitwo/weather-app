import React from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';

// Search box for users to input city
class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { search: '' }
    this.onChange = (search) => this.setState({ search })
  }

  // handleFormSubmit = (event) => {
  //   event.preventDefault()
  //   const { search } = this.state

  //   geocodeByAddress(search,  (err, { lat, lng }) => {
  //     if (err) { console.log('Oh no!', err) }

  //     console.log(`Yay! got latitude and longitude for ${search}`, { lat, lng })
  //   })
  // }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete
          value={this.state.search}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default SearchBox;