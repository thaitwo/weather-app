// ./components/home.jsx

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import SearchBar from './search-bar.jsx';

require('../stylesheets/main.scss');

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar className="search-bar"/>
        <p>You choose the city. We'll forecast.</p>
      </div>
    );
  }
}

export default Home;