// ./jsx/forecast-daily.jsx;

import React from 'react';
import isEmpty from 'lodash/isempty';

class ForecastDaily extends React.Component {
  constructor(props) {
    super(props);
  }

  // Renders the header row for the table containing Hourly Forecast data
  renderTableHeaderRow() {
    return (
      <tr>
        <th>Time</th>
        <th></th>
        <th>Condition</th>
        <th>Temp</th>
        <th>Precip</th>
        <th>Humidity</th>
        <th>Wind</th>
      </tr>
    );
  }

  // Renders the cards containing data for the 5 Day Forecast
  renderTableRows() {
    // Loop through each array to get data, then push data into the card template below
    const cards = this.props.forecastData.map((data, index) => {
      let fullDate = new Date(data.dt * 1000);
      /** Time Begin
      Keep this directly after Date instance before it gets manipulated
      **/
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      }
      const time = fullDate.toLocaleString('en-US', options);
      /** Time End **/

      fullDate = fullDate.toString().split(' ');
      const day = fullDate[0];
      const month = fullDate[1];
      const date = fullDate[2];

      // Condition Description
      const condition = data.weather[0].main;
      // Temperature
      const tempKelvin = data.main.temp;
      const tempFahrenheit = Math.floor((tempKelvin - 273) * (9/5) +32);
      // Icon Code
      const iconCode = data.weather[0].icon;
      // Rain Level
      const rainLevelIsProvided = !_.isEmpty(data.rain); // check if rain data is provided
      const rainLevel = rainLevelIsProvided ? data.rain['3h'] : 0;
      // Humidity
      const humidity = data.main.humidity;
      // Wind
      const wind = Math.round(data.wind.speed);

      return (

        <tr key={index}>
          <td className="forecast-time-container">
            <div className="forecast-time">{time}</div>
            <div className="forecast-day">{day}</div>
          </td>
          <td className="forecast-icon"><img src={`http://openweathermap.org/img/w/${iconCode}.png`}/></td>
          <td className="forecast-condition">{condition}</td>
          <td className="forecast-temp">{tempFahrenheit} °F</td>
          <td className="forecast-precip">{rainLevel} mm</td>
          <td>{humidity}%</td>
          <td>{wind} mph</td>
        </tr>
      );
    })

    return cards;
  }

  render() {
    return (
      <div>
        <table className="forecast-table">
          <thead>
            {this.renderTableHeaderRow()}
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ForecastDaily;