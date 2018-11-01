import React from 'react';
import Check from '~/src/check';

const CheckComponent = () => {
  const check = new Check;
  check.add('apple', 5);
  check.add('banana', 10);
  check.add('lemon', 6);
  check.add('mango', 8);
  check.remove('lemon');

  return (
    <div>
      <p>You have {check.positionsCount} items in your check:</p>
      <ul>
        {
          check.positions.map(position => (
            <li key={position.name}>{position.name}: {position.price}$</li>
          ))
        }
      </ul>
      <p>Total sum: {check.sum}$</p>
    </div>
    );
}

export default CheckComponent;
