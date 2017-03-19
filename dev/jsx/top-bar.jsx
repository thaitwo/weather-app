// ./jsx/top-bar.jsx

import React from 'react';
import SearchBar from './search-bar';

class TopBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="top-bar l-flex is-hori align-hori-space-between">
        <h1 className="logo">Weathercast</h1>
        <div className="box">
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default TopBar;