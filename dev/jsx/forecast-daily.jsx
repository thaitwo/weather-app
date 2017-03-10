// ./jsx/forecast-daily.jsx;

import React from 'react';

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
    });

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