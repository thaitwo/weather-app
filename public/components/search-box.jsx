import React from 'react';

// Search box for users to input city
export default class SearchBox extends React.Component {
  render() {
    return (
      <form>
      	<input type="text" placeholder="Search City" />
      	<button>Search</button>
      </form>
    );
  }
}