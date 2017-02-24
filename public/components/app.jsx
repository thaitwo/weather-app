import React from 'react';
import axios from 'axios';
import Nav from './nav';
import SearchBox from './search-box';
import WeatherCard from './weather-card';

const api_url = 'http://api.wunderground.com/api/5332856fca0fe1e7/conditions/q/CA/San_Francisco.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      temp: ''
    };
  }

  // Calling Weather Channel API to fetch data
  componentDidMount() {
    axios.get(api_url)
      .then(response => {
        this.setState({
          city: response.data.current_observation.display_location.city,
          temp: response.data.current_observation.temp_f
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Nav />
        <h1>Weather Forecast</h1>
        <SearchBox />
        <WeatherCard city={this.state.city} temp={this.state.temp} />
        <WeatherCard city="Alameda" temp="72" wind="10"/>
      </div>
    );
  }
}