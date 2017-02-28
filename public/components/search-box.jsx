import React from 'react';

// Search box for users to input city
class SearchBox extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search City" />
        <button>Search</button>
      </form>
    );
  }
}

export default SearchBox;