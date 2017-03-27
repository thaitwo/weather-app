// ./jsx/home.jsx

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import SearchBox from './search-box.jsx';

class Home extends React.Component {

  render() {
    return (
      <div className="home">
        <div className="main">
          <div className="homepage">
            <h1 className="title">Weathercast</h1>
            <p className="tagline">Your daily splash of live weather.</p>
            <div className="home-search-box">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;