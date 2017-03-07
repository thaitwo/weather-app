// ./components/forecast-hourly.jsx

import React from 'react';
import ForecastHour from './forecast-hour.jsx';

class ForecastHourly extends React.Component {
  constructor(props) {
    super(props);
  }

  // {...this.props} is a "spread operator" that simplifies the passing of properties
  render() {
    return (
      <div>
        <ForecastHour {...this.props}/>
      </div>
    )
  }
}

export default ForecastHourly;