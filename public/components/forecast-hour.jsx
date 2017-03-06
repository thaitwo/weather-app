// ./components/forecast-hour.jsx

import React from 'react';

class ForecastHour extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>{this.props.hourTime1}</li>
          <li>{this.props.hourCondition1}</li>
          <li>{this.props.hourTemp1} °F</li>
          <li>{this.props.hourPrecip1}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime2}</li>
          <li>{this.props.hourCondition2}</li>
          <li>{this.props.hourTemp2} °F</li>
          <li>{this.props.hourPrecip2}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime3}</li>
          <li>{this.props.hourCondition3}</li>
          <li>{this.props.hourTemp3} °F</li>
          <li>{this.props.hourPrecip3}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime4}</li>
          <li>{this.props.hourCondition4}</li>
          <li>{this.props.hourTemp4} °F</li>
          <li>{this.props.hourPrecip4}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime5}</li>
          <li>{this.props.hourCondition5}</li>
          <li>{this.props.hourTemp5} °F</li>
          <li>{this.props.hourPrecip5}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime6}</li>
          <li>{this.props.hourCondition6}</li>
          <li>{this.props.hourTemp6} °F</li>
          <li>{this.props.hourPrecip6}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime7}</li>
          <li>{this.props.hourCondition7}</li>
          <li>{this.props.hourTemp7} °F</li>
          <li>{this.props.hourPrecip7}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime8}</li>
          <li>{this.props.hourCondition8}</li>
          <li>{this.props.hourTemp8} °F</li>
          <li>{this.props.hourPrecip8}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime9}</li>
          <li>{this.props.hourCondition9}</li>
          <li>{this.props.hourTemp9} °F</li>
          <li>{this.props.hourPrecip9}%</li>
        </ul>
        <ul>
          <li>{this.props.hourTime10}</li>
          <li>{this.props.hourCondition10}</li>
          <li>{this.props.hourTemp10} °F</li>
          <li>{this.props.hourPrecip10}%</li>
        </ul>
      </div>
    )
  }
}

export default ForecastHour;