import React from 'react';
import {
  Link,
  Route,
  Switch,
  useRouteMatch,
 } from 'react-router-dom';
import GameDescriptor from './GameDescriptor';

const Home = () => {
  const { url, path } = useRouteMatch();
  return (
    <>
      <h1> WELCOME </h1>
      <div>
        <strong>Check the Games</strong>
        <ul>
          <li>
            <Link to={`${url}/tictactoe`}>TicTacToe Game</Link>
            {' - '}
            <Link to={`/tictactoe`}>[Play Now]</Link>
          </li>
          <li>
            <Link to={`${url}/pacman`}>Pacman Game</Link>
            {' - (pending)'}
          </li>
        </ul>
        <em>Select one to see description</em>
        <Switch>
          <Route path={`${path}/:gameName`}>
            <GameDescriptor />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Home;
