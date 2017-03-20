// ./jsx/weather.jsx

import React from 'react';
import axios from 'axios';
import _ from 'lodash';
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

  // Fetch data for weather Conditions, Forecast, Hourly, and 10 Day from Weather Channel API
  getWeatherData() {
    // Request data from multiple APIs simultaneously
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

  // Make the initial Ajax request to display the weather data
  componentDidMount() {
    this.getWeatherData();
  }

  // Compare the previous props with the current props taken from the URL.
  // If they are different, then make a new Ajax request to get new data.
  // This comparison prevents recursive Ajax requests.
  componentDidUpdate(prevProps) {
    // Use isEqual() only if you know the entire objects are supposed to be the same:
    const same = _.isEqual(this.props.params, prevProps.params);

    if (!same) {
      this.getWeatherData();
    }
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
