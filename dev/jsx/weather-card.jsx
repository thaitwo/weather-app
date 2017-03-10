// ./jsx/weather-card.jsx

// This component displays the layout and all the weather data when for a location

import React from 'react';
import ForecastHourly from './forecast-hourly.jsx';
import ForecastDaily from './forecast-daily.jsx';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // Renders the template for the current weather data
  renderCurrentWeatherCard() {
    let weathercard = null;

    if (this.props.conditionsData) {
      weathercard = (
        <div className="weather-current">
          <h2 className="city-name">{this.props.conditionsData.display_location.full}</h2>
          <p className="current-date">{this.props.currentdate}</p>
          <div>
            <p className="current-temp">{this.props.conditionsData.temp_f} <span>°F</span></p>
          </div>
          <div className="current-info">
            <h4 className="current-condition">{this.props.conditionsData.weather}</h4>
            <ul className="current-data">
              <li>Precipitation <span>{this.props.forecastData[0].pop}%</span></li>
              <li>Wind <span>{this.props.conditionsData.wind_gust_mph} mph</span></li>
              <li>Humidity <span>{this.props.conditionsData.relative_humidity}</span></li>
            </ul>
          </div>
        </div>
      );
    }

    return weathercard;
  }

  render() {
    return (
      <div>
        {this.renderCurrentWeatherCard()}
        <h1 className="forecast-header">Hourly Forecast</h1>
        <ForecastHourly {...this.props}/>
        <h1 className="forecast-header">5 Day Forecast</h1>
        <ForecastDaily {...this.props}/>
      </div>
    );
  }
}

export default WeatherCard;