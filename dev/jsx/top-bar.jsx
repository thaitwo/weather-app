// ./jsx/top-bar.jsx

import React from 'react';
import { Link } from 'react-router';
import SearchBox from './search-box';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top-bar-container">
        <div className="wrapper">
          <div className="top-bar">
            <Link to="/"><h1 className="logo">Weathercast</h1></Link>
            <div className="small-searchbox">
              <SearchBox />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar;