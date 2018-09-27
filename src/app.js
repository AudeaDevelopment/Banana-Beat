import React, { Component } from 'react';
import Sequencer from './sequencer';

// const allDrums = [snare(), hihat(), kick(), tom1(), tom2(), crash()];
//
// generateTable(allDrums);

export default class App extends Component {
  render() {
    return <Sequencer />;
  }
}
