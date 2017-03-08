// ./jsx/home.jsx

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import SearchBar from './search-bar.jsx';

class Home extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Link to="/"><h1 className="title">Weathercast</h1></Link>
        <p className="tagline">Your daily splash of live weather.</p>
        <SearchBar className="search-bar"/>
      </div>
    );
  }
}

export default Home;