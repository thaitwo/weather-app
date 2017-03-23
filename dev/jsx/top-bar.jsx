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
      <div className="top-bar l-flex is-hori align-hori-space-between">
        <Link to="/"><h1 className="logo">Weathercast</h1></Link>
        <div className="small-searchbox">
          <SearchBox />
        </div>
      </div>
    )
  }
}

export default TopBar;