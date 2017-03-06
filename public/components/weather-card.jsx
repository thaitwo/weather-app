// ./components/weather-card.jsx

import React from 'react';
import ForecastHour from './forecast-hour.jsx';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.date}</p>
        <h2>{this.props.cityname}</h2>
        <p>Condition: {this.props.condition}</p>
        <p>Temp: {this.props.temp} °F</p>
        <p>Gusts {this.props.wind} MPH</p>
        <p>Humidity: {this.props.humidity}</p>
        <p>Precipitation: {this.props.precip}%</p>
        <h1>HOURLY FORECAST</h1>
        <ForecastHour {...this.props}/>
        <h1>5 DAY FORECAST</h1>
      </div>
    );
  }
}

export default WeatherCard;