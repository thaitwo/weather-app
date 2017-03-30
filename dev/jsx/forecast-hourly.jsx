// ./jsx/forecast-hourly.jsx

import React from 'react';
import slice from 'lodash/slice';

class ForecastHourly extends React.Component {
  constructor(props) {
    super(props);
  }
  // Renders the header row for the table containing Hourly Forecast data
  renderTableHeaderRow() {
    return (
      <tr className="l-flex is-hori align-hori-space-between">
        <th className="hourly-time">TIME</th>
        <th className="hourly-icon"></th>
        <th>CONDITION</th>
        <th>TEMPERATURE</th>
        <th>PRECIPITATION</th>
      </tr>
    );
  }

  // Renders the rows with data for the Hourly Forecast
  renderTableRows() {
    const rows = this.props.hourlyData.map((data, index) => {
      return (
        <tr key={index} className="l-flex is-hori align-hori-space-between">
          <td className="hourly-time">{data.FCTTIME.civil}</td>
          <td className="hourly-icon"><img src={`http://icons.wxug.com/i/c/v4/${data.icon}.svg`}/></td>
          <td>{data.condition}</td>
          <td>{data.temp.english} °F</td>
          <td>{data.pop}%</td>
        </tr>
      );
    })
    // Using Lodash's slice method to get only the first 10 arrays
    .slice(0, 10);

    return rows;
  }

  render() {
    return (
      <div className="forecast-hourly">
        <table>
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

export default ForecastHourly;