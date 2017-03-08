// ./jsx/app.jsx

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

require('../scss/styles.scss');

class App extends React.Component {
  render() {
    return (
      // Contents from the child components will be inserted in this container <div>
      <div className="container main">
        {this.props.children}
      </div>
    );
  }
}

export default App;
