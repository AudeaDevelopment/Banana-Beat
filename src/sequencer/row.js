import React, { Component } from 'react';
import Beat from './beat';

export default class SequencerRow extends Component {
  state = { beats: Array(16).fill(true) };

  render() {
    const { beats } = this.state;
    return <main className="row-container">{beats.map(() => <Beat />)}</main>;
  }
}
