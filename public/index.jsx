// ./public/index.jsx

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// Import custom components
import App from './components/app.jsx';
import Home from './components/home.jsx';
import Weather from './components/weather.jsx';

require('./stylesheets/main.scss');

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/weather/:country/:city/:state" component={Weather} />
    </Route>
  </Router>
), document.getElementById('root'))

// <IndexRoute component={App} />