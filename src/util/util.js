// document
//   .getElementById('random-button')
//   .addEventListener('click', handleRandomizeClick);

export const handleRandomizeClick = () => {
  let code = '';
  // random setup
  for (let char = 0; char < allDrums.length * 2; char++) {
    code += String.fromCharCode(Math.round(Math.random() * 255 + 215));
  }
  // random tempo
  code += ` ${Math.round(Math.random() * 180 + 20)}`;

  loadDrumSetup(decode(code));
};

export const gridIsEmpty = () => {
  for (let i = 0; i < allDrums.length; i++) {
    for (let j = 0; j < allDrums[i].playTriggers.length; j++) {
      if (allDrums[i].playTriggers[j]) {
        return false;
      }
    }
  }
  return true;
};

export const copyDrumsList = drumList => {
  const drumListCopy = [];
  let drumCopy;
  for (let i = 0; i < drumList.length; i++) {
    drumCopy = new Drum(drumList[i].name, drumList[i].sample);
    drumCopy.playTriggers = drumList[i].playTriggers.slice();
    drumListCopy.push(drumCopy);
  }
  return drumListCopy;
};

// returns the index of the given drum in the given list. searches by name. returns -1 if not present.
function checkForDrum(drumList, drum) {
  for (let i = 0; i < drumList.length; i++) {
    if (drumList[i].name === drum.name) {
      return i;
    }
  }
  return -1;
}
