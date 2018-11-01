import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ArithmeticComponent from '~/src/ArithmeticComponent';
import CheckComponent from '~/src/CheckComponent';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        Hello, World!

        <ArithmeticComponent />
        <CheckComponent />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
