// ./jsx/forecast-hourly.jsx

import React from 'react';

class ForecastHourly extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTableHeaderRow() {
    return (
      <tr className="l-flex is-hori align-hori-space-between">
        <th>TIME</th>
        <th></th>
        <th>CONDITION</th>
        <th>TEMPERATURE</th>
        <th>PRECIPITATION</th>
      </tr>
    );
  }

  renderTableRows() {
    const rows = this.props.hourlyData.map((data, index) => {
      return (
        <tr key={index} className="l-flex is-hori align-hori-space-between">
          <td>{data.FCTTIME.civil}</td>
          <td></td>
          <td>{data.condition}</td>
          <td>{data.temp.english} °F</td>
          <td>{data.pop}%</td>
        </tr>
      );
    });

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