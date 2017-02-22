import React from 'react';
import axios from 'axios';

// Calling Weather Channel API to fetch data
export default class FetchWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    axios.get('http://api.wunderground.com/api/5332856fca0fe1e7/conditions/q/CA/San_Francisco.json')
      .then(response => {
        this.setState({
          city: response.data.current_observation.display_location.city,
          temp: response.data.current_observation.temp_f
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.city}</h1>
        <h1>{this.state.temp}</h1>
      </div>
    );
  }
}