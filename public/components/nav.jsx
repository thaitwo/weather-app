import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ul>
        <li>HOME</li>
        <li>MAPS</li>
        <li>ABOUT</li>
      </ul>
    );
  }
}