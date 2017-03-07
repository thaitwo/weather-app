// ./dev/index.jsx

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

// Import custom components
import App from './jsx/app.jsx';
import Home from './jsx/home.jsx';
import FetchWeather from './jsx/weather.jsx';

render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/weather/:country/:city/:state" component={FetchWeather} />
    </Route>
  </Router>
), document.getElementById('root'))