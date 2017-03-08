// ./jsx/home.jsx

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import SearchBar from './search-bar.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/"><h1 className="title">Weathercast</h1></Link>
        <p className="tagline">Bringing a splash of weather to your life.</p>
        <SearchBar className="search-bar"/>
      </div>
    );
  }
}

export default Home;