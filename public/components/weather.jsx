// ./components/weather.jsx

import React from 'react';
import axios from 'axios';
import SearchBar from './search-bar';
import WeatherCard from './weather-card';
import Geosuggest from 'react-geosuggest';

const api_url_conditions = `http://api.wunderground.com/api/5332856fca0fe1e7/conditions/q/ca/san_francisco.json`;
const api_url_forecast = `http://api.wunderground.com/api/5332856fca0fe1e7/forecast/q/ca/san_francisco.json`;

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: '',
      condition: '',
      humidity: '',
      precip: '',
      temp: '',
      wind: '',
    };
  }

  // Fetch data for weather CONDITIONS and FORECAST from Weather Channel API
  componentDidMount() {
    // Request data from two APIs simultaneously
    axios.all([
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/conditions/q/${this.props.params.state}/${this.props.params.city}.json`),
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/forecast/q/${this.props.params.state}/${this.props.params.city}.json`)
    ])
    .then(axios.spread((conditions, forecast) => {
      // Set state for React component with API data
      this.setState({
        cityname: conditions.data.current_observation.display_location.full,
        condition: conditions.data.current_observation.weather,
        humidity: conditions.data.current_observation.relative_humidity,
        precip: forecast.data.forecast.simpleforecast.forecastday[0].pop,
        temp: conditions.data.current_observation.temp_f,
        wind: conditions.data.current_observation.wind_mph
      });
    }))
    .catch(function (error) {
      console.log(error);
    });
  }

  // fetchWeather(data) {
  //   console.log(data);
  // }

  render() {
  	console.log(this.props.params);
    return (
      <div>
        <SearchBar />
        <p>You choose a city. We'll forecast.</p>
        <WeatherCard
          cityname={this.state.cityname}
          condition={this.state.condition}
          humidity={this.state.humidity}
          precip={this.state.precip}
          temp={this.state.temp}
          wind={this.state.wind}
        />
      </div>
    );
  }
}

export default Weather;


 // _.find(team, (user, index) => user.id === 1);
