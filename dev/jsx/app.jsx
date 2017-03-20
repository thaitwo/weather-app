// ./jsx/app.jsx

import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

require('../scss/styles.scss');

class App extends React.Component {
  render() {
    return (
      // Contents from the child components will be inserted in this container <div>
      <div className="container l-flex is-vert align-vert-center">
        <div className="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
