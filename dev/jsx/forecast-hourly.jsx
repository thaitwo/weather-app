// ./jsx/forecast-hourly.jsx

import React from 'react';

class ForecastHourly extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="forecast-hourly">
        <table>
          <thead>
            <tr className="l-flex is-hori align-hori-space-between">
              <th>TIME</th>
              <th></th>
              <th>CONDITION</th>
              <th>TEMPERATURE</th>
              <th>PRECIPITATION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime1}</td>
              <td></td>
              <td>{this.props.hourCondition1}</td>
              <td>{this.props.hourTemp1} °F</td>
              <td>{this.props.hourPrecip1}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime2}</td>
              <td></td>
              <td>{this.props.hourCondition2}</td>
              <td>{this.props.hourTemp2} °F</td>
              <td>{this.props.hourPrecip2}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime3}</td>
              <td></td>
              <td>{this.props.hourCondition3}</td>
              <td>{this.props.hourTemp3} °F</td>
              <td>{this.props.hourPrecip3}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime4}</td>
              <td></td>
              <td>{this.props.hourCondition4}</td>
              <td>{this.props.hourTemp4} °F</td>
              <td>{this.props.hourPrecip4}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime5}</td>
              <td></td>
              <td>{this.props.hourCondition5}</td>
              <td>{this.props.hourTemp5} °F</td>
              <td>{this.props.hourPrecip5}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime6}</td>
              <td></td>
              <td>{this.props.hourCondition6}</td>
              <td>{this.props.hourTemp6} °F</td>
              <td>{this.props.hourPrecip6}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime7}</td>
              <td></td>
              <td>{this.props.hourCondition7}</td>
              <td>{this.props.hourTemp7} °F</td>
              <td>{this.props.hourPrecip7}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime8}</td>
              <td></td>
              <td>{this.props.hourCondition8}</td>
              <td>{this.props.hourTemp8} °F</td>
              <td>{this.props.hourPrecip8}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime9}</td>
              <td></td>
              <td>{this.props.hourCondition9}</td>
              <td>{this.props.hourTemp9} °F</td>
              <td>{this.props.hourPrecip9}%</td>
            </tr>
            <tr className="l-flex is-hori align-hori-space-between">
              <td>{this.props.hourTime10}</td>
              <td></td>
              <td>{this.props.hourCondition10}</td>
              <td>{this.props.hourTemp10} °F</td>
              <td>{this.props.hourPrecip10}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ForecastHourly;