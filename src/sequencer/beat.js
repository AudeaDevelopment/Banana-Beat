import React, { Component } from 'react';

export default class Beat extends Component {
  toggleBeat = (e, drum) => {
    // formerly toggleTrigger
    const beatBox = e.target;
    if (beatBox.className === 'off') {
      drum.playTriggers[beatBox.getAttribute('count-index')] = true;
      beatBox.className = 'on';
      beatBox.style.background = randomColor();
    } else {
      drum.playTriggers[beatBox.getAttribute('count-index')] = false;
      beatBox.className = 'off';
      beatBox.style.background = 'none';
    }
    resetExportCode();
  };

  render() {
    return (
      <div className="beat">
        <div />
      </div>
    );
  }
}
