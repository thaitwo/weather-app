// ./jsx/weather-card.jsx

// This component displays the template and all the weather data when for a location

import React from 'react';
import TopBar from './top-bar';
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
        <div className="current-wth__content">
          <h2 className="current-wth__city">{this.props.conditionsData.display_location.full}</h2>
          <p className="current-wth__date">{this.props.currentdate}</p>
          <div className="current-wth__icon-temp-container">
            <img className="current-wth__icon" src={`https://icons.wxug.com/i/c/v4/${this.props.conditionsData.icon}.svg`}/>
            <p className="current-wth__temp">{this.props.conditionsData.temp_f} <span>°F</span></p>
          </div>
          <div className="current-wth__data-container">
            <h4 className="current-wth__condition">{this.props.conditionsData.weather}</h4>
            <ul className="current-wth__data-list">
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
        <div className="current-wth">
          <div className="wrapper">
            <TopBar />
            {this.renderCurrentWeatherCard()}
          </div>
        </div>
        <div className="wrapper">
          <h1 className="forecast__header">HOURLY FORECAST</h1>
          <ForecastHourly {...this.props}/>
          <h1 className="forecast__header">5 DAY FORECAST</h1>
          <ForecastDaily {...this.props}/>
        </div>
      </div>
    );
  }
}

export default WeatherCard;