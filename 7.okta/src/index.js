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
import { Security, LoginCallback } from '@okta/okta-react';

const OKTA_DOMAIN = process.env.REACT_APP_DOMAIN;
const HOST = window.location.host;
const config = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  issuer: `https://${OKTA_DOMAIN}/oauth2/default`,
  redirectUri: `http://${HOST}/implicit/callback`,
  scopes: ['openid', 'profile', 'email'],
  pkce: true
};

ReactDOM.render(
  <Router>
    <Security {...config}>
      <Header />
      <hr/>
      <Switch>
        <Route path="/implicit/callback"><LoginCallback /></Route>
        <Route path="/tictactoe"><Game /></Route>
        <Route path="/pacman"><Pacman /></Route>
        <Route path="/home"><Home /></Route>
        <Route path="*"><NotFound /></Route>
      </Switch>
      <hr/>
      <Footer />
    </Security>
  </Router>,
  document.getElementById('root')
);
