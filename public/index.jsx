import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import Appp from './components/app-ex';

class App extends React.Component {
  render() {
    return (
      <div>
        <p><Link to="/weather">Weather</Link></p>
        {this.props.children}
      </div>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>weathercast</h1>
        <form>
          <input type="text" placeholder="Search City" />
          <button>Search</button>
        </form>
        <p>You choose the city. We forecast.</p>
      </div>
    )
  }
}

class Weather extends React.Component {
  render() {
    return (
      <Appp />
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="weather" component={Weather} />
    </Route>
  </Router>
), document.getElementById('root'))