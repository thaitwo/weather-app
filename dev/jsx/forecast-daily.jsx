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
    const cards = this.props.dailyData.map((data, index) => {
      return (
        <div className="forecast-daily-card" key={index}>
          <div>
            <h4>{data.date.weekday_short}</h4>
            <h5>{data.date.monthname_short} {data.date.day}</h5>
          </div>
          <div className="daily-icon"><img src={`http://icons.wxug.com/i/c/v4/${data.icon}.svg`}/></div>
          <p className="daily-conditions">{data.conditions}</p>
          <div className="daily-high-low">{data.high.fahrenheit}° | {data.low.fahrenheit}°</div>
          <div className="daily-precip"><i className="fa fa-tint" aria-hidden="true"></i> {data.pop}%</div>
        </div>
      );
    })
    // Using Lodash's slice method to get only arrays 1 - 6
    .slice(1, 6);

    return cards;
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