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
        console.log('forecast', forecast);
        let fullDate = current.data.dt;
        fullDate = new Date(fullDate * 1000);
        fullDate = fullDate.toString().split(' ');

        const date = fullDate[0]; // ex: Mon
        const month = fullDate[1]; // January
        const day = fullDate[2]; // 12
        const displayDate = `${date}, ${month} ${day}`;

        const rainLevel = !_.isEmpty(current.data.rain) ? current.data.rain['1h'] : 0;

        this.setState({
          currentData: current.data,
          forecastData: forecast.data.list,
          currentRain: rainLevel,
          currentdate: displayDate,
        });
      }))
      .catch(function (erorr) {
        console.log(error);
      })
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
      <div className="">
        <WeatherCard
          currentData={this.state.currentData}
          forecastData={this.state.forecastData}
          currentRain={this.state.currentRain}
          currentdate={this.state.currentdate}
        />
      </div>
    );
  }
}

export default FetchWeather;
