import React from 'react';

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