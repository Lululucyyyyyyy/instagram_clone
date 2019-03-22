import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> Instagram Clone </h1> 
        <form method="GET" action='/signup'>
          <button type='submit'> Sign Up </button>
        </form>
        <form method="GET" action='/signin'>
          <button type='submit'> Sign In </button>
        </form>
      </div>
    )
  }
}
