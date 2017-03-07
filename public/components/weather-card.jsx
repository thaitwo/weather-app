// ./components/weather-card.jsx

import React from 'react';
import ForecastHourly from './forecast-hourly.jsx';
import ForecastDaily from './forecast-daily.jsx';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.date}</p>
        <h2>{this.props.cityname}</h2>
        <p>Temp: {this.props.temp} °F</p>
        <ul>
          <li>Condition: {this.props.condition}</li>
          <li>Gusts {this.props.wind} MPH</li>
          <li>Humidity: {this.props.humidity}</li>
          <li>Precipitation: {this.props.precip}%</li>
        </ul>
        <h1>HOURLY FORECAST</h1>
        <ForecastHourly {...this.props}/>
        <h1>5 DAY FORECAST</h1>
        <ForecastDaily {...this.props}/>
      </div>
    );
  }
}

export default WeatherCard;