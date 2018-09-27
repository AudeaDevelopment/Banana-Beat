import React, { Component } from 'react';

export default class Button extends Component {}

//
// const reset = document.getElementById('reset');
// reset.addEventListener('click', resetBeats);
// function resetBeats() {
//   const allRows = document.querySelectorAll('#grid-beat tr');
//   let allCells;
//   for (let i = 0; i < allDrums.length; i++) {
//     allDrums[i].playTriggers.fill(false);
//     allCells = allRows[i].childNodes;
//     for (let j = 1; j < allCells.length; j++) {
//       allCells[j].className = 'off';
//       allCells[j].style.background = 'none';
//     }
//   }
//
//   resetExportCode();
// }

//
// const playPauseButton = document.getElementById('playhead');
// playPauseButton.addEventListener('click', handlePlayPauseClick);
// function handlePlayPauseClick(e) {
//   const bananaSpiral = document.getElementById('banana-spiral');
//   if (e.target.id === 'playhead') {
//     clearInterval(playingInterval);
//     e.target.id = 'playhead-paused';
//     bananaSpiral.className = '';
//   } else {
//     playingInterval = setInterval(playBeat, MINUTE / (bpm * 4));
//     const spinSpeed = 9 - ((bpm - 20) / 180) * 8;
//     bananaSpiral.style.animationDuration = `${spinSpeed}s`;
//     e.target.id = 'playhead';
//     bananaSpiral.className = 'spinning';
//   }
// }
