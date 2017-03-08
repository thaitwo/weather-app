// ./jsx/weather-card.jsx

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
        <div className="weather-current">
          <h2 className="city-name">{this.props.cityname}</h2>
          <p className="current-date">{this.props.currentdate}</p>
          <div>
            <p className="current-temp">{this.props.currenttemp} <span>°F</span></p>
          </div>
          <div className="current-info">
            <h4 className="current-condition">{this.props.currentcondition}</h4>
            <ul className="current-data">
              <li>Precipitation <span>{this.props.currentprecip}%</span></li>
              <li>Wind <span>{this.props.currentwind} mph</span></li>
              <li>Humidity <span>{this.props.currenthumidity}</span></li>
            </ul>
          </div>
        </div>
        <h1 className="forecast-header">Hourly Forecast</h1>
        <ForecastHourly {...this.props}/>
        <h1 className="forecast-header">5 Day Forecast</h1>
        <ForecastDaily {...this.props}/>
      </div>
    );
  }
}

export default WeatherCard;