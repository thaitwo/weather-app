// ./jsx/forecast-daily.jsx;

import React from 'react';

class ForecastDaily extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
       <div>
        <h4>{this.props.dailyWeekday1}, {this.props.dailyMonth1} {this.props.dailyDay1}</h4>
        <p>{this.props.dailyCondition1}</p>
        <p>{this.props.dailyTempHigh1}° / {this.props.dailyTempLow1}°</p>
        <p>{this.props.dailyPrecip1}%</p>
       </div>
       <div>
        <h4>{this.props.dailyWeekday2}, {this.props.dailyMonth2} {this.props.dailyDay2}</h4>
        <p>{this.props.dailyCondition2}</p>
        <p>{this.props.dailyTempHigh2}° / {this.props.dailyTempLow2}°</p>
        <p>{this.props.dailyPrecip2}%</p>
       </div>
       <div>
        <h4>{this.props.dailyWeekday3}, {this.props.dailyMonth3} {this.props.dailyDay3}</h4>
        <p>{this.props.dailyCondition3}</p>
        <p>{this.props.dailyTempHigh3}° / {this.props.dailyTempLow3}°</p>
        <p>{this.props.dailyPrecip3}%</p>
       </div>
       <div>
        <h4>{this.props.dailyWeekday4}, {this.props.dailyMonth4} {this.props.dailyDay4}</h4>
        <p>{this.props.dailyCondition4}</p>
        <p>{this.props.dailyTempHigh4}° / {this.props.dailyTempLow4}°</p>
        <p>{this.props.dailyPrecip4}%</p>
       </div>
       <div>
        <h4>{this.props.dailyWeekday5}, {this.props.dailyMonth5} {this.props.dailyDay5}</h4>
        <p>{this.props.dailyCondition5}</p>
        <p>{this.props.dailyTempHigh5}° / {this.props.dailyTempLow5}°</p>
        <p>{this.props.dailyPrecip5}%</p>
       </div>
      </div>
    )
  }
}

export default ForecastDaily;