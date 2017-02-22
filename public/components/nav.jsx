import React from 'react';

export default class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      item: []
    };
	}
}

function nav(props) {
  return <p>{props.item}</p>;
}

const element = <nav item="About"