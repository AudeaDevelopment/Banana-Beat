// let c;
// let cSharp;
// let d;
// let dSharp;
// let e;
// let f;
// let fSharp;
// let g;
// let gSharp;
// let a;
// let aSharp;
// let b;
// let cNext;
// let keyA;
//
// let keyW;
//
// let keyS;
//
// let keyE;
//
// let keyD;
//
// let keyF;
//
// let keyT;
//
// let keyG;
//
// let keyY;
//
// let keyH;
//
// let keyU;
//
// let keyJ;
//
// let keyK;
//
// let firstPause = true;
// let firstKeyA = true;
// let firstKeyB = true;
// let firstKeyC = true;
// let firstKeyD = true;
// let firstKeyE = true;
// let firstKeyF = true;
// let firstKeyG = true;
// let firstKeyCSharp = true;
// let firstKeyDSharp = true;
// let firstKeyFSharp = true;
// let firstKeyGSharp = true;
// let firstKeyASharp = true;
// let firstKeyCNext = true;
//
// const notes = [];
// function handlePianoClick(e) {
//   const clickedKey = e.target.id;
//   console.log(e.target.id);
//   for (let i = 0; i < notes.length; i++) {
//     if (clickedKey == notes[i].name) {
//       const something = new Note(parseInt(notes[i].frequency));
//       something.start();
//     }
//   }
// }
//
// document.onkeydown = function (event) {
//   switch (event.keyCode) {
//     case 190:
//       if (!firstPause) return;
//       firstPause = false;
//       var button = document.getElementById('banana-spiral');
//       if (button.className === 'spinning') {
//         clearInterval(playingInterval);
//         button.className = '';
//       } else {
//         playingInterval = setInterval(playBeat, MINUTE / (bpm * 4));
//         const spinSpeed = 9 - ((bpm - 20) / 180) * 8;
//         button.style.animationDuration = `${spinSpeed}s`;
//         button.className = 'spinning';
//       }
//       break;
//     case 65:
//       if (!firstKeyC) return;
//       firstKeyC = false;
//       c = new Note(261.63, 'A');
//       notes.push(c);
//       c.start();
//       keyA = document.getElementById('A');
//       keyA.className += ' pressed';
//       break;
//
//     case 87:
//       if (!firstKeyCSharp) return;
//       firstKeyCSharp = false;
//       cSharp = new Note(277.18);
//       cSharp.start();
//       keyW = document.getElementById('c-sharp');
//       keyW.className += ' pressed';
//       break;
//
//     case 83:
//       if (!firstKeyD) return;
//       firstKeyD = false;
//       d = new Note(293.66);
//       d.start();
//       keyS = document.getElementById('S');
//       keyS.className += ' pressed';
//       break;
//
//     case 69:
//       if (!firstKeyDSharp) return;
//       firstKeyDSharp = false;
//       dSharp = new Note(311.13);
//       dSharp.start();
//       keyE = document.getElementById('d-sharp');
//       keyE.className += ' pressed';
//       break;
//
//     case 68:
//       if (!firstKeyE) return;
//       firstKeyE = false;
//       e = new Note(329.63);
//       e.start();
//       keyD = document.getElementById('D');
//       keyD.className += ' pressed';
//       break;
//
//     case 70:
//       if (!firstKeyF) return;
//       firstKeyF = false;
//       f = new Note(349.23);
//       f.start();
//       keyF = document.getElementById('F');
//       keyF.className += ' pressed';
//       break;
//
//     case 84:
//       if (!firstKeyFSharp) return;
//       firstKeyFSharp = false;
//       fSharp = new Note(369.99);
//       fSharp.start();
//       keyT = document.getElementById('f-sharp');
//       keyT.className += ' pressed';
//       break;
//
//     case 71:
//       if (!firstKeyG) return;
//       firstKeyG = false;
//       g = new Note(392);
//       g.start();
//       keyG = document.getElementById('G');
//       keyG.className += ' pressed';
//       break;
//
//     case 89:
//       if (!firstKeyGSharp) return;
//       firstKeyGSharp = false;
//       gSharp = new Note(415.3);
//       gSharp.start();
//       keyY = document.getElementById('g-sharp');
//       keyY.className += ' pressed';
//       break;
//
//     case 72:
//       if (!firstKeyA) return;
//       firstKeyA = false;
//       a = new Note(440);
//       a.start();
//       keyH = document.getElementById('H');
//       keyH.className += ' pressed';
//       break;
//
//     case 85:
//       if (!firstKeyASharp) return;
//       firstKeyASharp = false;
//       aSharp = new Note(466.16);
//       aSharp.start();
//       keyU = document.getElementById('a-sharp');
//       keyU.className += ' pressed';
//       break;
//
//     case 74:
//       if (!firstKeyB) return;
//       firstKeyB = false;
//       b = new Note(493.88);
//       b.start();
//       keyJ = document.getElementById('J');
//       keyJ.className += ' pressed';
//       break;
//
//     case 75:
//       if (!firstKeyCNext) return;
//       firstKeyCNext = false;
//       cNext = new Note(523.25);
//       cNext.start();
//       keyK = document.getElementById('K');
//       keyK.className += ' pressed';
//       break;
//   }
// };
//

// document.onkeyup = function (event) {
//   switch (event.keyCode) {
//     case 190:
//       firstPause = true;
//       break;
//     case 65:
//       firstKeyC = true;
//       c.stop();
//       keyA.className = keyA.className.split(' ')[0];
//       break;
//
//     case 87:
//       firstKeyCSharp = true;
//       cSharp.stop();
//       keyW.className = keyW.className.split(' ')[0];
//       break;
//
//     case 83:
//       firstKeyD = true;
//       d.stop();
//       keyS.className = keyS.className.split(' ')[0];
//       break;
//
//     case 69:
//       firstKeyDSharp = true;
//       dSharp.stop();
//       keyE.className = keyE.className.split(' ')[0];
//       break;
//
//     case 68:
//       firstKeyE = true;
//       e.stop();
//       keyD.className = keyD.className.split(' ')[0];
//       break;
//
//     case 70:
//       firstKeyF = true;
//       f.stop();
//       keyF.className = keyF.className.split(' ')[0];
//       break;
//
//     case 84:
//       firstKeyFSharp = true;
//       fSharp.stop();
//       keyT.className = keyT.className.split(' ')[0];
//       break;
//
//     case 71:
//       firstKeyG = true;
//       g.stop();
//       keyG.className = keyG.className.split(' ')[0];
//       break;
//
//     case 89:
//       firstKeyGSharp = true;
//       gSharp.stop();
//       keyY.className = keyY.className.split(' ')[0];
//       break;
//
//     case 72:
//       firstKeyA = true;
//       a.stop();
//       keyH.className = keyH.className.split(' ')[0];
//       break;
//
//     case 85:
//       firstKeyASharp = true;
//       aSharp.stop();
//       keyU.className = keyU.className.split(' ')[0];
//       break;
//
//     case 74:
//       firstKeyB = true;
//       b.stop();
//       keyJ.className = keyJ.className.split(' ')[0];
//       break;
//
//     case 75:
//       firstKeyCNext = true;
//       cNext.stop();
//       keyK.className = keyK.className.split(' ')[0];
//       break;
//
//     default:
//       return null;
//   }
// };
