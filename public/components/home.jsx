import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search City" />
        <button>Search</button>
      </form>
    );
  }
}

export default Home;