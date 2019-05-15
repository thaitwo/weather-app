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

    if (this.props.currentData) {

      weathercard = (
        <div className="current-wth__content">
          <h2 className="current-wth__city">{this.props.currentData.name}, {this.props.currentData.sys.country}</h2>
          <p className="current-wth__date">{this.props.currentdate}</p>
          <div className="current-wth__icon-temp-container">
            <div className="current-wth__icon-container">
              <img className="current-wth__icon" src={`http://openweathermap.org/img/w/${this.props.currentData.weather[0].icon}.png`}/>
            </div>
            <p className="current-wth__temp">{this.props.currentData.main.temp} <span>°F</span></p>
          </div>
          <div className="current-wth__data-container">
            <h4 className="current-wth__condition">{this.props.currentData.weather[0].main}</h4>
            <ul className="current-wth__data-list">
              <li>Precipitation <span>{this.props.currentRain} mm</span></li>
              <li>Wind <span>{this.props.currentData.wind.speed} mph</span></li>
              <li>Humidity <span>{this.props.currentData.main.humidity} %</span></li>
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
          {/* <h1 className="forecast__header">HOURLY FORECAST</h1> */}
          {/* <ForecastHourly {...this.props}/> */}
          <h1 className="forecast__header">5 DAY FORECAST</h1>
          <ForecastDaily {...this.props}/>
        </div>
      </div>
    );
  }
}

export default WeatherCard;