// ./jsx/forecast-daily.jsx;

import React from 'react';
import slice from 'lodash/slice';

class ForecastDaily extends React.Component {
  constructor(props) {
    super(props);
  }

  // Renders the cards containing data for the 5 Day Forecast
  renderCards() {
    // Loop through each array to get data, then push data into the card template below
    const cards = this.props.forecastData.map((data, index) => {
      let fullDate = new Date(data.dt * 1000);
      fullDate = fullDate.toString().split(' ');
      const date = fullDate[0];
      const month = fullDate[1];
      const day = fullDate[2];

      return (
        <div className="forecast-daily-card" key={index}>
          <div>
            <h4>{date}</h4>
            <h5>{month} {day}</h5>
          </div>
          <div className="daily-icon"><img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}/></div>
          <p className="daily-conditions">{data.weather[0].main}</p>
          <div className="daily-high-low">{data.main.temp_max}° | {data.main.temp_min}°</div>
        </div>
      );
    })

    // Loop through forecast array and return 5 items for the 5-day forecase
    // Data array consist of 40 object with each object representing every 3 hour
    // Therefore, we loop through and get every 8th object in the array
    // For loop is used here instead of filter to prevent looping through every item if array were to be too long
    let forecastCards = [];
    const maxVal = 5;
    const delta = Math.floor(cards.length / maxVal);

    for (let i = 0; i < cards.length; i = i + delta) {
      forecastCards.push(cards[i]);
    }

    return forecastCards;
  }

  render() {
    return (
      <div className="forecast-daily">
       {this.renderCards()}
      </div>
    )
  }
}

export default ForecastDaily;