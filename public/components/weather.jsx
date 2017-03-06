// ./components/weather.jsx

import React from 'react';
import axios from 'axios';
import SearchBar from './search-bar';
import WeatherCard from './weather-card';
import Geosuggest from 'react-geosuggest';

const api_url_conditions = `http://api.wunderground.com/api/5332856fca0fe1e7/conditions/q/ca/san_francisco.json`;
const api_url_forecast = `http://api.wunderground.com/api/5332856fca0fe1e7/forecast/q/ca/san_francisco.json`;


class FetchWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: '',
      condition: '',
      date: '',
      humidity: '',
      precip: '',
      temp: '',
      wind: '',
      hourTime1: '',
      hourCondition1: '',
      hourTemp1: '',
      hourPrecip1: '',
      hourTime2: '',
      hourCondition2: '',
      hourTemp2: '',
      hourPrecip2: '',
      hourTime3: '',
      hourCondition3: '',
      hourTemp3: '',
      hourPrecip3: '',
      hourTime4: '',
      hourCondition4: '',
      hourTemp4: '',
      hourPrecip4: '',
      hourTime5: '',
      hourCondition5: '',
      hourTemp5: '',
      hourPrecip5: '',
      hourTime6: '',
      hourCondition6: '',
      hourTemp6: '',
      hourPrecip6: '',
      hourTime7: '',
      hourCondition7: '',
      hourTemp7: '',
      hourPrecip7: '',
      hourTime8: '',
      hourCondition8: '',
      hourTemp8: '',
      hourPrecip8: '',
      hourTime9: '',
      hourCondition9: '',
      hourTemp9: '',
      hourPrecip9: '',
      hourTime10: '',
      hourCondition10: '',
      hourTemp10: '',
      hourPrecip10: '',
    };
  }

  // Fetch data for weather CONDITIONS and FORECAST from Weather Channel API
  componentDidMount() {
    // Request data from two APIs simultaneously
    axios.all([
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/conditions/q/${this.props.params.state}/${this.props.params.city}.json`),
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/forecast/q/${this.props.params.state}/${this.props.params.city}.json`),
      axios.get(`http://api.wunderground.com/api/5332856fca0fe1e7/hourly/q/${this.props.params.state}/${this.props.params.city}.json`)
    ])
    .then(axios.spread((conditions, forecast, hourly) => {
      const hourlyData = hourly.data.hourly_forecast;
      const conditionsData = conditions.data.current_observation;

      // Divide date string into substrings and get the first 3 strings (Mon, 06 Mar)
      let date = conditionsData.observation_time_rfc822;
      date = date.split(/\s+/).slice(0,3).join(' ');

      // Set state for React component with API data
      this.setState({
        // Current conditions
        cityname: conditionsData.display_location.full,
        condition: conditionsData.weather,
        date: date,
        humidity: conditionsData.relative_humidity,
        precip: forecast.data.forecast.simpleforecast.forecastday[0].pop,
        temp: conditionsData.temp_f,
        wind: conditionsData.wind_gust_mph,

        // Hourly forecast
        hourTime1: hourlyData[0].FCTTIME.civil,
        hourCondition1: hourlyData[0].condition,
        hourTemp1: hourlyData[0].temp.english,
        hourPrecip1: hourlyData[0].pop,
        hourTime2: hourlyData[1].FCTTIME.civil,
        hourCondition2: hourlyData[1].condition,
        hourTemp2: hourlyData[1].temp.english,
        hourPrecip2: hourlyData[1].pop,
        hourTime3: hourlyData[2].FCTTIME.civil,
        hourCondition3: hourlyData[2].condition,
        hourTemp3: hourlyData[2].temp.english,
        hourPrecip3: hourlyData[2].pop,
        hourTime4: hourlyData[3].FCTTIME.civil,
        hourCondition4: hourlyData[3].condition,
        hourTemp4: hourlyData[3].temp.english,
        hourPrecip4: hourlyData[3].pop,
        hourTime5: hourlyData[4].FCTTIME.civil,
        hourCondition5: hourlyData[4].condition,
        hourTemp5: hourlyData[4].temp.english,
        hourPrecip5: hourlyData[4].pop,
        hourTime6: hourlyData[5].FCTTIME.civil,
        hourCondition6: hourlyData[5].condition,
        hourTemp6: hourlyData[5].temp.english,
        hourPrecip6: hourlyData[5].pop,
        hourTime7: hourlyData[6].FCTTIME.civil,
        hourCondition7: hourlyData[6].condition,
        hourTemp7: hourlyData[6].temp.english,
        hourPrecip7: hourlyData[6].pop,
        hourTime8: hourlyData[7].FCTTIME.civil,
        hourCondition8: hourlyData[7].condition,
        hourTemp8: hourlyData[7].temp.english,
        hourPrecip8: hourlyData[7].pop,
        hourTime9: hourlyData[8].FCTTIME.civil,
        hourCondition9: hourlyData[8].condition,
        hourTemp9: hourlyData[8].temp.english,
        hourPrecip9: hourlyData[8].pop,
        hourTime10: hourlyData[9].FCTTIME.civil,
        hourCondition10: hourlyData[9].condition,
        hourTemp10: hourlyData[9].temp.english,
        hourPrecip10: hourlyData[9].pop,

        // Daily forecast
      });
      console.log(conditions, forecast, hourly);
    }))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
  	console.log(this.props.params);
    return (
      <div>
        <SearchBar />
        <WeatherCard
          cityname={this.state.cityname}
          condition={this.state.condition}
          date={this.state.date}
          humidity={this.state.humidity}
          precip={this.state.precip}
          temp={this.state.temp}
          wind={this.state.wind}
          hourTime1={this.state.hourTime1}
          hourCondition1={this.state.hourCondition1}
          hourTemp1={this.state.hourTemp1}
          hourPrecip1={this.state.hourPrecip1}
          hourTime2={this.state.hourTime2}
          hourCondition2={this.state.hourCondition2}
          hourTemp2={this.state.hourTemp2}
          hourPrecip2={this.state.hourPrecip2}
          hourTime3={this.state.hourTime3}
          hourCondition3={this.state.hourCondition3}
          hourTemp3={this.state.hourTemp3}
          hourPrecip3={this.state.hourPrecip3}
          hourTime4={this.state.hourTime4}
          hourCondition4={this.state.hourCondition4}
          hourTemp4={this.state.hourTemp4}
          hourPrecip4={this.state.hourPrecip4}
          hourTime5={this.state.hourTime5}
          hourCondition5={this.state.hourCondition5}
          hourTemp5={this.state.hourTemp5}
          hourPrecip5={this.state.hourPrecip5}
          hourTime6={this.state.hourTime6}
          hourCondition6={this.state.hourCondition6}
          hourTemp6={this.state.hourTemp6}
          hourPrecip6={this.state.hourPrecip6}
          hourTime7={this.state.hourTime7}
          hourCondition7={this.state.hourCondition7}
          hourTemp7={this.state.hourTemp7}
          hourPrecip7={this.state.hourPrecip7}
          hourTime8={this.state.hourTime8}
          hourCondition8={this.state.hourCondition8}
          hourTemp8={this.state.hourTemp8}
          hourPrecip8={this.state.hourPrecip8}
          hourTime9={this.state.hourTime9}
          hourCondition9={this.state.hourCondition9}
          hourTemp9={this.state.hourTemp9}
          hourPrecip9={this.state.hourPrecip9}
          hourTime10={this.state.hourTime10}
          hourCondition10={this.state.hourCondition10}
          hourTemp10={this.state.hourTemp10}
          hourPrecip10={this.state.hourPrecip10}
        />
      </div>
    );
  }
}

export default FetchWeather;


 // _.find(team, (user, index) => user.id === 1);
