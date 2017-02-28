import React from 'react';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.city}</h2>
        <p>{this.props.updated_time}</p>
        <p>{this.props.condition}</p>
        <p>{this.props.temp}°F</p>
        <p>Wind {this.props.wind}</p>
        <p>Humidity {this.props.humidity}</p>
        <p>Precipitation {this.props.precip}</p>
      </div>
    );
  }
}

export default WeatherCard;