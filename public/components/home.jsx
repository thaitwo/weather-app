// ./components/home.jsx

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import SearchBar from './search-bar.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
      	<Link to="/weather">Weather</Link>
        <SearchBar />
        <p>You choose the city. We'll forecast.</p>
      </div>
    );
  }
}

export default Home;