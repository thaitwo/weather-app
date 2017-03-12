// ./jsx/forecast-daily.jsx;

import React from 'react';
import slice from 'lodash/slice';

class ForecastDaily extends React.Component {
  constructor(props) {
    super(props);
  }

  // Renders the cards containing data for the 5 Day Forecast
  renderCards() {
    const cards = this.props.dailyData.map((data, index) => {
      return (
        <div  key={index}>
          <div>
            <h4>{data.date.weekday_short}, {data.date.monthname_short} {data.date.day}</h4>
          </div>
          <div className="forecast-daily-card">
            <p>{data.conditions}</p>
            <ul className="l-flex is-hori align-hori-space-between">
              <li>{data.high.fahrenheit}° | {data.low.fahrenheit}°</li>
              <li>{data.pop}%</li>
            </ul>
          </div>
        </div>
      );
    })
    // Using Lodash's slice method to get only the first 5 arrays
    .slice(0, 5);

    return cards;
  }

  render() {
    return (
      <div className="forecast-daily l-flex is-hori align-hori-space-between">
       {this.renderCards()}
      </div>
    )
  }
}

export default ForecastDaily;