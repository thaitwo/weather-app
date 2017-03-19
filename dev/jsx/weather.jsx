// ./jsx/weather.jsx

import React from 'react';
import axios from 'axios';
import SearchBar from './search-bar';
import TopBar from './top-bar';
import WeatherCard from './weather-card';
import Geosuggest from 'react-geosuggest';

class FetchWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conditionsData: null,
      forecastData: [ ],
      hourlyData: [ ],
      dailyData: [ ],
      currentdate: '',
    };
  }

  // Fetch data for weather CONDITIONS and FORECAST from Weather Channel API
  componentDidMount() {
    // Request data from two APIs simultaneously
    axios.all([
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/conditions/q/${this.props.params.state}/${this.props.params.city}.json`),
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/forecast/q/${this.props.params.state}/${this.props.params.city}.json`),
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/hourly/q/${this.props.params.state}/${this.props.params.city}.json`),
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/forecast10day/q/${this.props.params.state}/${this.props.params.city}.json`)
    ])
    .then(axios.spread((conditions, forecast, hourly, daily) => {

      // Divide date string into substrings and get the first 3 strings (Mon, 06 Mar)
      let date = conditions.data.current_observation.observation_time_rfc822;
      date = date.split(/\s+/).slice(0,3).join(' ');

      console.log(conditions, forecast, hourly, daily);
      // Set state for React component with API data
      this.setState({
        conditionsData: conditions.data.current_observation,
        forecastData: forecast.data.forecast.simpleforecast.forecastday,
        hourlyData: hourly.data.hourly_forecast,
        dailyData: daily.data.forecast.simpleforecast.forecastday,
        currentdate: date,
      });
    }))
    .catch(function (error) {
      console.log(error);
    });
  }

  renderWeatherCards() {

  }

  render() {
    return (
      <div>
        <TopBar />
        <WeatherCard
          conditionsData={this.state.conditionsData}
          forecastData={this.state.forecastData}
          hourlyData={this.state.hourlyData}
          dailyData={this.state.dailyData}
          currentdate={this.state.currentdate}
        />
      </div>
    );
  }
}

export default FetchWeather;
