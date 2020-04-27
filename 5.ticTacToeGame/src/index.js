import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { calculateWinner } from './components/utils';
import Board from './components/Board';
import Winner from './components/Winner';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        { squares: Array(9).fill(null) },
      ],
      isXPlayer: true,
      winner: null,
    };
  }

  getPlayerMark() {
    const { isXPlayer } = this.state;
    return isXPlayer ? 'X' : 'O';
  }

  restartGame() {
    this.setState({
      history: [
        { squares: Array(9).fill(null) },
      ],
      isXPlayer: true,
      winner: null,
    });
  }

  handleClick(index) {
    const { winner, isXPlayer, history } = this.state;
    const current = history[history.length - 1];
    if (winner || (current && current.squares[index])) {
      return;
    }
    const squares = current.squares.slice()
    squares[index] = this.getPlayerMark();
    this.setState({
       history: history.concat([{ squares }]),
       isXPlayer: !isXPlayer,
       winner: calculateWinner(squares),
      });
  }

  showStep(step, move) {
    const isXPlayer = move % 2 === 0;
    this.setState({ step, isXPlayer });
  }

  render() {
    const { winner, history, step } = this.state;
    const { squares } = step || history[history.length - 1];
    const status = `Next player: ${this.getPlayerMark()}`;
    const moves = winner ? history.map((step, move) => (
        <li key={'step'+move}>
          <button onClick={() => this.showStep(step, move)}>Show move no. {move}</button>
        </li>
      )) : null;
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={squares}
            onClick={(index) => this.handleClick(index)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <Winner winner={winner} onReset={() => this.restartGame()} />
          <ol>{moves}</ol>
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
