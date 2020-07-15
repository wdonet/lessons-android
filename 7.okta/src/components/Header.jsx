import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const Header = () => {
  return (
    <nav>
      <ul>
        <Login />
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/tictactoe">TicTacToe</Link></li>
        <li><Link to="/pacman">Pacman</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
