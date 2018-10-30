import React from 'react';
import Arithmetic from './arithmetic';

const ArithmeticComponent = () => {
  let x = 6;
  let y = 5;

  return (
    <div>
      <p>Add: {Arithmetic.add(x, y)}</p>
      <p>Substract: {Arithmetic.substract(x, y)}</p>
      <p>Multiply: {Arithmetic.multiply(x, y)}</p>
      <p>Divide: {Arithmetic.divide(x, y)}</p>
    </div>
  );
}

export default ArithmeticComponent;
