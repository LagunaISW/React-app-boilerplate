import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './screens/Main/Main';

export default class App extends Component {
  render () {
    return (
      <Route path='/' component={Main} />
    );
  }
}
