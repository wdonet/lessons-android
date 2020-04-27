// @flow
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './Ozz.css';

class Ozz extends Component {
  render() {
    return (
      <div className="Ozz">
        <h1>Hello Ozz</h1>
      </div>
    );
  }
}

export default hot(module)(Ozz);
