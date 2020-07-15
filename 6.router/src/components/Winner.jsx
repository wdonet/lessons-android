import React from 'react';

const Winner = props => {
  const { winner, onReset } = props;
  if (!winner) {
    return null;
  }
  return (
    <div className="board-row">
      <div className="status">{`Winner ${winner} !`}</div>
      <div>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
};

export default Winner;