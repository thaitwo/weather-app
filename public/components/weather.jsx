// ./components/weather.jsx

import React from 'react';
import axios from 'axios';
import SearchBar from './search-bar';
import WeatherCard from './weather-card';
import Geosuggest from 'react-geosuggest';

class FetchWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityname: '',
      currentcondition: '',
      currentdate: '',
      currenthumidity: '',
      currentprecip: '',
      currenttemp: '',
      currentwind: '',
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
      dailyWeekday1: '',
      dailyMonth1: '',
      dailyDay1: '',
      dailyCondition1: '',
      dailyTempHigh1: '',
      dailyTempLow1: '',
      dailyPrecip1: '',
      dailyWeekday2: '',
      dailyMonth2: '',
      dailyDay2: '',
      dailyCondition2: '',
      dailyTempHigh2: '',
      dailyTempLow2: '',
      dailyPrecip2: '',
      dailyWeekday3: '',
      dailyMonth3: '',
      dailyDay3: '',
      dailyCondition3: '',
      dailyTempHigh3: '',
      dailyTempLow3: '',
      dailyPrecip3: '',
      dailyWeekday4: '',
      dailyMonth4: '',
      dailyDay4: '',
      dailyCondition4: '',
      dailyTempHigh4: '',
      dailyTempLow4: '',
      dailyPrecip4: '',
      dailyWeekday5: '',
      dailyMonth5: '',
      dailyDay5: '',
      dailyCondition5: '',
      dailyTempHigh5: '',
      dailyTempLow5: '',
      dailyPrecip5: '',
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
      const conditionsData = conditions.data.current_observation;
      const forecastData = forecast.data.forecast.simpleforecast.forecastday;
      const hourlyData = hourly.data.hourly_forecast;
      const dailyData = daily.data.forecast.simpleforecast.forecastday;

      // Divide date string into substrings and get the first 3 strings (Mon, 06 Mar)
      let date = conditionsData.observation_time_rfc822;
      date = date.split(/\s+/).slice(0,3).join(' ');

      // Set state for React component with API data
      this.setState({
        // Current conditions
        cityname: conditionsData.display_location.full,
        currentcondition: conditionsData.weather,
        currentdate: date,
        currenthumidity: conditionsData.relative_humidity,
        currentprecip: forecastData[0].pop,
        currenttemp: conditionsData.temp_f,
        currentwind: conditionsData.wind_gust_mph,

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
        dailyWeekday1: dailyData[1].date.weekday_short,
        dailyMonth1: dailyData[1].date.monthname_short,
        dailyDay1: dailyData[1].date.day,
        dailyCondition1: dailyData[1].conditions,
        dailyTempHigh1: dailyData[1].high.fahrenheit,
        dailyTempLow1: dailyData[1].low.fahrenheit,
        dailyPrecip1: dailyData[1].pop,
        dailyWeekday2: dailyData[2].date.weekday_short,
        dailyMonth2: dailyData[2].date.monthname_short,
        dailyDay2: dailyData[2].date.day,
        dailyCondition2: dailyData[2].conditions,
        dailyTempHigh2: dailyData[2].high.fahrenheit,
        dailyTempLow2: dailyData[2].low.fahrenheit,
        dailyPrecip2: dailyData[2].pop,
        dailyWeekday3: dailyData[3].date.weekday_short,
        dailyMonth3: dailyData[3].date.monthname_short,
        dailyDay3: dailyData[3].date.day,
        dailyCondition3: dailyData[3].conditions,
        dailyTempHigh3: dailyData[3].high.fahrenheit,
        dailyTempLow3: dailyData[3].low.fahrenheit,
        dailyPrecip3: dailyData[3].pop,
        dailyWeekday4: dailyData[4].date.weekday_short,
        dailyMonth4: dailyData[4].date.monthname_short,
        dailyDay4: dailyData[4].date.day,
        dailyCondition4: dailyData[4].conditions,
        dailyTempHigh4: dailyData[4].high.fahrenheit,
        dailyTempLow4: dailyData[4].low.fahrenheit,
        dailyPrecip4: dailyData[4].pop,
        dailyWeekday5: dailyData[5].date.weekday_short,
        dailyMonth5: dailyData[5].date.monthname_short,
        dailyDay5: dailyData[5].date.day,
        dailyCondition5: dailyData[5].conditions,
        dailyTempHigh5: dailyData[5].high.fahrenheit,
        dailyTempLow5: dailyData[5].low.fahrenheit,
        dailyPrecip5: dailyData[5].pop,
      });
    }))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <WeatherCard
          cityname={this.state.cityname}
          currentcondition={this.state.currentcondition}
          currentdate={this.state.currentdate}
          currenthumidity={this.state.currenthumidity}
          currentprecip={this.state.currentprecip}
          currenttemp={this.state.currenttemp}
          currentwind={this.state.currentwind}
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
          dailyWeekday1={this.state.dailyWeekday1}
          dailyMonth1={this.state.dailyMonth1}
          dailyDay1={this.state.dailyDay1}
          dailyCondition1={this.state.dailyCondition1}
          dailyTempHigh1={this.state.dailyTempHigh1}
          dailyTempLow1={this.state.dailyTempLow1}
          dailyPrecip1={this.state.dailyPrecip1}
          dailyWeekday2={this.state.dailyWeekday2}
          dailyMonth2={this.state.dailyMonth2}
          dailyDay2={this.state.dailyDay2}
          dailyCondition2={this.state.dailyCondition2}
          dailyTempHigh2={this.state.dailyTempHigh2}
          dailyTempLow2={this.state.dailyTempLow2}
          dailyPrecip2={this.state.dailyPrecip2}
          dailyWeekday3={this.state.dailyWeekday3}
          dailyMonth3={this.state.dailyMonth3}
          dailyDay3={this.state.dailyDay3}
          dailyCondition3={this.state.dailyCondition3}
          dailyTempHigh3={this.state.dailyTempHigh3}
          dailyTempLow3={this.state.dailyTempLow3}
          dailyPrecip3={this.state.dailyPrecip3}
          dailyWeekday4={this.state.dailyWeekday4}
          dailyMonth4={this.state.dailyMonth4}
          dailyDay4={this.state.dailyDay4}
          dailyCondition4={this.state.dailyCondition4}
          dailyTempHigh4={this.state.dailyTempHigh4}
          dailyTempLow4={this.state.dailyTempLow4}
          dailyPrecip4={this.state.dailyPrecip4}
          dailyWeekday5={this.state.dailyWeekday5}
          dailyMonth5={this.state.dailyMonth5}
          dailyDay5={this.state.dailyDay5}
          dailyCondition5={this.state.dailyCondition5}
          dailyTempHigh5={this.state.dailyTempHigh5}
          dailyTempLow5={this.state.dailyTempLow5}
          dailyPrecip5={this.state.dailyPrecip5}
        />
      </div>
    );
  }
}

export default FetchWeather;
