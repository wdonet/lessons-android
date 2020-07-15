import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './components/Game';
import Header from './components/Header';
import Footer from './components/Footer';
import Pacman from './components/Pacman';
import NotFound from './components/NotFound';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Header />
    <hr/>
    <Switch>
      <Route path="/tictactoe"><Game /></Route>
      <Route path="/pacman"><Pacman /></Route>
      <Route path="/home"><Home /></Route>
      <Route path="*"><NotFound /></Route>
    </Switch>
    <hr/>
    <Footer />
  </Router>,
  document.getElementById('root')
);
