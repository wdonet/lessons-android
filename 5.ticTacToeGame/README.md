This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to Build

### Create the basic structure for the game

1. `npx create-react-app game`
2. Remove every file at `src`
3. Create `./src/index.js` and `index.css`
```css
body {
  font: 14px "Century Gothic", Futura, sans-serif;
  margin: 20px;
}

ol, ul {
  padding-left: 30px;
}

.board-row:after {
  clear: both;
  content: "";
  display: table;
}

.status {
  margin-bottom: 10px;
}

.square {
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
}

.square:focus {
  outline: none;
}

.kbd-navigation .square:focus {
  background: #ddd;
}

.game {
  display: flex;
  flex-direction: row;
}

.game-info {
  margin-left: 20px;
}
```
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
```

In the project directory, you can run:

### Try this
1. Make Square respond to one click to paint an X
    - Separate each component into a different file. Use `./src/components` folder.
2. Save all square states at Board instead
    - Send onClick() handler from Board to Square to handle click
    - Change Square to be a pure component
3. Send X or O dependending the player from Board to Square
    - Change the "Next player" legend based on the corresponding turn
    - Avoid X overwrite O and viceversa
4. Define `calculateWinner()` at `./src/utils/utils.js`, import it, then call it at click handler
    - Example - could you improve it?
```js
const calculateWinner = squares => {
  const lines = [
    [0, 1, 2], // i + 1 twice
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // i + 3 twice
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // i + 4 twice
    [2, 4, 6], // i + 2 twice
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
```
    - Add a `Winner` pure component to render text with a winner
    - Hide status message when a winner exists
    - Add a Restart button to reset the board 
    - Block the board when a winner exist for not changing values on squares on further clicks
5. Add history to navigate through (immutability is important)
    - Create `constructor()` at `Game` component for holding an  array of objects like `[ { squares: [] } ]` in state
    - Lift `handleClick()` up from `Board` to `Game`, then update it according to the new history array
    - Lift `resetBoard()` up from `Board` to `Game`, then update it according to the new history array
    - Now `Game` when using `Board` should look like
    ```jsx
      <Board
        squares={squares}
        onClick={(index) => this.handleClick(index)}
      />
    ```
    - Move sections: _status_ and _`Winner` componente_ to `Game`
    - Show past moves
      - Add a method `showStep()` to fill grid with values from that step
      - Add a list for triggering previous method like (only if there's a winner):
      ```jsx
      const moves = winner ? history.map((step, move) => (
        <li>
          <button onClick={() => this.showStep(step)}>Show move no. {move}</button>
        </li>
      )) : null;
      ```
    - Can `Board` component be pure now?
    - How to remove error _Each child in an array or iterator should have a unique “key”_ ?
      - _Note:_ Keys do not need to be globally unique; they only need to be unique between components and their siblings
    - Make status updates through steps navigations too

## Run
1. Just run `npm start`
2. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
