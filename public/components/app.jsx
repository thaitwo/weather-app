import React from 'react';
import SearchBox from './search-box';
import FetchWeather from './api';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Weather Forecast</h1>
        <SearchBox />
        <FetchWeather />
      </div>
    );
  }
}