// ./jsx/forecast-daily.jsx;

import React from 'react';
import slice from 'lodash/slice';

class ForecastDaily extends React.Component {
  constructor(props) {
    super(props);
  }

  renderCards() {
    const cards = this.props.dailyData.map((data, index) => {
      return (
        <ul key={index}>
          <h4>{data.date.weekday_short}, {data.date.monthname_short} {data.date.day}</h4>
          <li>{data.conditions}</li>
          <li>{data.high.fahrenheit}° / {data.low.fahrenheit}°</li>
          <li>{data.pop}%</li>
        </ul>
      );
    })
    // Using Lodash's slice method to get on the first 5 arrays
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