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
        <p>{this.props.currentdate}</p>
        <h2>{this.props.cityname}</h2>
        <p>Temp: {this.props.currenttemp} °F</p>
        <ul>
          <li>Condition: {this.props.currentcondition}</li>
          <li>Gusts {this.props.currentwind} MPH</li>
          <li>Humidity: {this.props.currenthumidity}</li>
          <li>Precipitation: {this.props.currentprecip}%</li>
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