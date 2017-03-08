// ./jsx/forecast-daily.jsx;

import React from 'react';

class ForecastDaily extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="forecast-daily l-flex is-hori align-hori-space-between">
       <ul>
        <h4>{this.props.dailyWeekday1}, {this.props.dailyMonth1} {this.props.dailyDay1}</h4>
        <li>{this.props.dailyCondition1}</li>
        <li>{this.props.dailyTempHigh1}° / {this.props.dailyTempLow1}°</li>
        <li>{this.props.dailyPrecip1}%</li>
       </ul>
       <ul>
        <h4>{this.props.dailyWeekday2}, {this.props.dailyMonth2} {this.props.dailyDay2}</h4>
        <li>{this.props.dailyCondition2}</li>
        <li>{this.props.dailyTempHigh2}° / {this.props.dailyTempLow2}°</li>
        <li>{this.props.dailyPrecip2}%</li>
       </ul>
       <ul>
        <h4>{this.props.dailyWeekday3}, {this.props.dailyMonth3} {this.props.dailyDay3}</h4>
        <li>{this.props.dailyCondition3}</li>
        <li>{this.props.dailyTempHigh3}° / {this.props.dailyTempLow3}°</li>
        <li>{this.props.dailyPrecip3}%</li>
       </ul>
       <ul>
        <h4>{this.props.dailyWeekday4}, {this.props.dailyMonth4} {this.props.dailyDay4}</h4>
        <li>{this.props.dailyCondition4}</li>
        <li>{this.props.dailyTempHigh4}° / {this.props.dailyTempLow4}°</li>
        <li>{this.props.dailyPrecip4}%</li>
       </ul>
       <ul>
        <h4>{this.props.dailyWeekday5}, {this.props.dailyMonth5} {this.props.dailyDay5}</h4>
        <li>{this.props.dailyCondition5}</li>
        <li>{this.props.dailyTempHigh5}° / {this.props.dailyTempLow5}°</li>
        <li>{this.props.dailyPrecip5}%</li>
       </ul>
      </div>
    )
  }
}

export default ForecastDaily;