// ./jsx/weather.jsx

import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchBar from './search-bar';
import WeatherCard from './weather-card';
import Geosuggest from 'react-geosuggest';

const API_KEY = '5332856fca0fe1e7';
const URL_BASE = `http://api.wunderground.com/api/${API_KEY}`;

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
    if (this.props.params.country === 'united_states') {
      axios.all([
        axios.get(`${URL_BASE}/conditions/q/${this.props.params.state}/${this.props.params.city}.json`),
        axios.get(`${URL_BASE}/forecast/q/${this.props.params.state}/${this.props.params.city}.json`),
        axios.get(`${URL_BASE}/hourly/q/${this.props.params.state}/${this.props.params.city}.json`),
        axios.get(`${URL_BASE}/forecast10day/q/${this.props.params.state}/${this.props.params.city}.json`)
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
    else {
      axios.get(`${URL_BASE}/geolookup/q/${this.props.params.country}/${this.props.params.city}.json`)
      .then(res => {
        console.log('YEEEEEEE', res);
        let cityId = _.get(res, 'data.response.results[0].l');
        if (!cityId) {
          cityId = _.get(res, 'data.location.l');
        }

        console.log(cityId);

        // get out of here instead of running nonsense code below
        if (!cityId) {
          return '404 Error';
        }
        if (cityId) {
          axios.all([
            axios.get(`${URL_BASE}/conditions/${cityId}.json`),
            axios.get(`${URL_BASE}/forecast/${cityId}.json`),
            axios.get(`${URL_BASE}/hourly/${cityId}.json`),
            axios.get(`${URL_BASE}/forecast10day/${cityId}.json`)
          ])
          .then(axios.spread((conditions, forecast, hourly, daily) => {
            // Divide date string into substrings and get the first 3 strings (Mon, 06 Mar)
            let date = conditions.data.current_observation.observation_time_rfc822;
            date = date.split(/\s+/).slice(0,3).join(' ');

            // Set state for React component with API data
            this.setState({
              conditionsData: conditions.data.current_observation,
              forecastData: forecast.data.forecast.simpleforecast.forecastday,
              hourlyData: hourly.data.hourly_forecast,
              dailyData: daily.data.forecast.simpleforecast.forecastday,
              currentdate: date,
            });
          }))
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }

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
        <SearchBar />
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
