// ./jsx/top-bar.jsx

import React from 'react';
import SearchBox from './search-box';

class TopBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="top-bar l-flex is-hori align-hori-space-between">
        <h1 className="logo">Weathercast</h1>
        <div className="small-searchbox">
          <SearchBox />
        </div>
      </div>
    )
  }
}

export default TopBar;