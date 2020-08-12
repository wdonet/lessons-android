import React from 'react';

const Counter = ({ value, onIncrement, onDecrement, onReset }) => {
  return (
    <div id="counter">
      <h1>{value}</h1>
      <div id="actions">
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
        <button onClick={onReset}>0</button>
      </div>
    </div>
  );
}

export default Counter;