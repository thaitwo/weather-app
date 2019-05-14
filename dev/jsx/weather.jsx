// ./jsx/weather.jsx

import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import SearchBox from './search-box';
// import TopBar from './top-bar';
import WeatherCard from './weather-card';
import Geosuggest from 'react-geosuggest';
import { API_KEY, URL_BASE } from './const';


class FetchWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: null,
      forecastData: [ ],
      currentRain: '',
      // hourlyData: [ ],
      // dailyData: [ ],
      currentdate: '',
    };
  }

  // Fetch data for weather Conditions, Forecast, Hourly, and 10 Day from Weather Channel API
  getWeatherData() {

    // If city and country value exists, make Ajax call to get weather data
    if (this.props.params.city && this.props.params.country) {
      axios.all([
        axios.get(`${URL_BASE}/weather?q=${this.props.params.city},${this.props.params.country}&APPID=${API_KEY}`),
        axios.get(`${URL_BASE}/forecast?q=${this.props.params.city},${this.props.params.country}&APPID=${API_KEY}`)
      ])
      .then(axios.spread((current, forecast) => {
        console.log('current', current);
        // console.log('forecast', forecast);
        let fullDate = current.data.dt;
        fullDate = new Date(fullDate * 1000);
        fullDate = fullDate.toString().split(' ');

        const date = fullDate[0]; // ex: Mon
        const month = fullDate[1]; // January
        const day = fullDate[2]; // 12
        const displayDate = `${date}, ${month} ${day}`;

        this.setState({
          currentData: current.data,
          forecastData: forecast.data,
          currentRain: current.data.rain || 0,
          currentdate: displayDate,
        });
      }))
      .catch(function (erorr) {
        console.log(error);
      })
    }
  /*
    // Check to see if the country value is equal to 'usa'. If yes, then make Ajax call to get weather info
    // This URL syntax is specific to cities only in the US
    if (this.props.params.country === 'usaa') {
      axios.all([
        // axios.get(`${URL_BASE}q=${this.props.params.city},${this.props.params.country}`),
        axios.get(`${URL_BASE}/conditions/q/${this.props.params.state}/${this.props.params.city}.json`),
        axios.get(`${URL_BASE}/forecast/q/${this.props.params.state}/${this.props.params.city}.json`),
        axios.get(`${URL_BASE}/hourly/q/${this.props.params.state}/${this.props.params.city}.json`),
        axios.get(`${URL_BASE}/forecast10day/q/${this.props.params.state}/${this.props.params.city}.json`)
      ])
      .then(axios.spread((conditions, forecast, hourly, daily) => {
        // Divide date string into substrings and get the first 3 strings (Mon, 06 Mar)
        let date = conditions.data.current_observation.observation_time_rfc822;
        date = date.split(/\s+/).slice(0,3).join(' ');

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
      // Because certain foreign cities won't return weather data when requested but they all do return
      // an ID which we can use to get the weather data, we have to get the ID first.

      // If the inputted city is outside of the US, then make this Ajax call to get ID for this city
      // axios.get(`${URL_BASE}/geolookup/q/${this.props.params.country}/${this.props.params.city}.json`)
      axios.get(`${URL_BASE}/weather?q=${this.props.params.city},${this.props.params.country}&APPID=${API_KEY}`)
      .then(res => {
        console.log('RES', res);
        // For this API, there are two ways to get the 'l'(ID) key
        // Check to see if the inputted city can get the key using this route
        let cityId = _.get(res, 'data.response.results[0].l');

        // If it can't, then get the key using this route
        if (!cityId) {
          cityId = _.get(res, 'data.location.l');
        }

        // If an ID exist, then make this Ajax call to get weather info for city
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
  */
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
      <div className="">
        <WeatherCard
          currentData={this.state.currentData}
          forecastData={this.state.forecastData}
          currentRain={this.state.currentRain}
          // hourlyData={this.state.hourlyData}
          // dailyData={this.state.dailyData}
          currentdate={this.state.currentdate}
        />
      </div>
    );
  }
}

export default FetchWeather;
