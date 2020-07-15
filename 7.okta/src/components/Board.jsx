import React from 'react';
import Square from './Square';

const IndexedSquare = props => {
  const { i, value, onClick } = props;
  return <Square value={value} onClick={() => onClick(i)}
  />;
}

const Board = props => {

  const renderSquares = (...indexes) => {
    return (
      <div className="board-row">
        {indexes.map(i => <IndexedSquare
          key={'sqr'+i}
          i={i}
          value={props.squares[i]}
          onClick={props.onClick}
        />)}
      </div>
    );
  }
  
  return (
    <div>
      {renderSquares(0, 1, 2)}
      {renderSquares(3, 4, 5)}
      {renderSquares(6, 7, 8)}
    </div>
  );
}

export default Board;
