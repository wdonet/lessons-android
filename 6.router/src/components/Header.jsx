import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/tictactoe">TicTacToe</Link></li>
        <li><Link to="/pacman">Pacman</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
