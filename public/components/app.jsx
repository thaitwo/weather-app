import React from 'react';
import SearchBox from './search-box';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather Forecast App</h1>
        <SearchBox />
      </div>
    );
  }
}