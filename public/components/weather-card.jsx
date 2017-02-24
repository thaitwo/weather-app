import React from 'react';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>City: {this.props.city}</h2>
        <h1>Temperature: {this.props.temp}</h1>
        <p>{this.props.wind}</p>
      </div>
    );
  }
}

export default WeatherCard;