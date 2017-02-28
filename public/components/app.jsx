import React from 'react';
import axios from 'axios';
import Nav from './nav';
import SearchBox from './search-box';
import WeatherCard from './weather-card';

const api_url_conditions = 'http://api.wunderground.com/api/5332856fca0fe1e7/conditions/q/CA/San_Francisco.json';
const api_url_forecast = 'http://api.wunderground.com/api/5332856fca0fe1e7/forecast/q/CA/San_Francisco.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      condition: '',
      humidity: '',
      precip: '',
      temp: '',
      wind: ''
    };
  }


  // _.find(team, (user, index) => user.id === 1);

  // Fetch data for weather CONDITIONS and FORECAST from Weather Channel API
  componentDidMount() {
    // Request data from two APIs simultaneously
    axios.all([
      axios.get(api_url_conditions),
      axios.get(api_url_forecast)
    ])
    .then(axios.spread((conditions, forecast) => {
      // Set state for React component with API data
      this.setState({
        city: conditions.data.current_observation.display_location.full,
        condition: conditions.data.current_observation.weather,
        humidity: conditions.data.current_observation.relative_humidity,
        precip: forecast.data.forecast.simpleforecast.forecastday[0].pop,
        temp: conditions.data.current_observation.temp_f,
        wind: conditions.data.current_observation.wind_mph
      });
      console.log(conditions, forecast);
    }))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <h1>weathercast</h1>
        <SearchBox />
        <p>You choose a city. We'll forecast.</p>
        <WeatherCard
          city={this.state.city}
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

export default App;