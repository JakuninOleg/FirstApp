import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArithmeticComponent from '~/src/ArithmeticComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        Hello, World!

        <ArithmeticComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
