document
  .getElementById('export-form')
  .addEventListener('submit', handleExportSubmit);

document
  .getElementById('import-form')
  .addEventListener('submit', handleImportSubmit);

function handleExportSubmit(e) {
  e.preventDefault();
  e.target.exportOutput.value = encode(allDrums);
  e.target.exportOutput.select();
}

function handleImportSubmit(e) {
  e.preventDefault();
  const importedDrums = decode(e.target.importInput.value);
  const errorBox = document.getElementById('error-message');
  if (importedDrums) {
    loadDrumSetup(importedDrums);
    errorBox.textContent = '';
  } else {
    errorBox.textContent = 'Please enter a valid code.';
  }
  e.target.reset();
}

function resetExportCode() {
  document.querySelector('#export-form input').value = '';
}

function encode(drumList) {
  let encodedList = '';
  let binaryString;
  let charOne;
  let charTwo;

  // current drum kit
  if (checkForDrum(drumList, goat1()) >= 0) {
    encodedList += '0';
  } else if (checkForDrum(drumList, snare()) >= 0) {
    encodedList += '1';
  } else {
    encodedList += '2';
  }

  // add ons
  if (checkForDrum(drumList, guitar1()) >= 0) {
    encodedList += '3';
  }
  if (checkForDrum(drumList, bass()) >= 0) {
    encodedList += '4';
  }
  if (checkForDrum(drumList, synthLoop()) >= 0) {
    encodedList += '5';
  }
  if (checkForDrum(drumList, bass3()) >= 0) {
    encodedList += '6';
  }
  if (checkForDrum(drumList, bassLoop2()) >= 0) {
    encodedList += '7';
  }

  encodedList += ' ';

  // encode t/f values
  for (let i = 0; i < drumList.length; i++) {
    binaryString = '';
    for (let j = 0; j < drumList[i].playTriggers.length; j++) {
      if (drumList[i].playTriggers[j]) {
        binaryString += '1';
      } else {
        binaryString += '0';
      }
    }
    charOne = binaryString.slice(0, 8); // fist byte
    charOne = String.fromCharCode(parseInt(charOne, 2) + 215); // default ×
    charTwo = binaryString.slice(8); // second byte
    charTwo = String.fromCharCode(parseInt(charTwo, 2) + 215); // default ×
    encodedList += charOne + charTwo;
  }
  encodedList += ` ${bpm}`;
  return encodedList;
}

// decodes a string of unicode characters to create a drum setup. uses the current set of drums to determine which drum sample and name. returns null if given invalid characters.
function decode(code) {
  const codes = code.split(' ');
  const encodedKit = codes[0];
  let encodedList = codes[1];
  let encodedBpm = codes[2];

  if (isNaN(parseInt(encodedKit))) {
    encodedList = codes[0];
    encodedBpm = codes[1];
  } else {
    // base kit
    if (encodedKit[0] == 0) {
      switchToOption0();
    } else if (encodedKit[0] == 1) {
      switchToOption1();
    } else if (encodedKit[0] == 2) {
      switchToOption2();
    }
    // add ons
    for (var i = 1; i < encodedKit.length; i++) {
      if (encodedKit[i] == 3) {
        switchToOption3();
      }
      if (encodedKit[i] == 4) {
        switchToOption4();
      }
      if (encodedKit[i] == 5) {
        switchToOption5();
      }
      if (encodedKit[i] == 6) {
        switchToOption6();
      }
      if (encodedKit[i] == 7) {
        switchToOption7();
      }
    }
  }

  if (encodedBpm >= 20 && encodedBpm <= 200) {
    loadTempo(encodedBpm);
  }

  const binaryList = [];
  let drum = '';
  let binaryHalf;
  let charCode;
  for (i = 0; i < encodedList.length; i++) {
    binaryHalf = '';
    charCode = encodedList.charCodeAt(i) - 215; // reset default to 0
    if (charCode < 0) {
      return null;
    }
    binaryHalf += charCode.toString(2);
    while (binaryHalf.length < 8) {
      binaryHalf = `0${binaryHalf}`;
    }
    drum += binaryHalf;
    if (i % 2) {
      if (drum.length > 16) {
        return null;
      }
      binaryList.push(drum);
      drum = '';
    }
  }

  const drumList = copyDrumsList(allDrums);

  for (i = 0; i < binaryList.length; i++) {
    drumList[i].playTriggers = [];
    for (let j = 0; j < binaryList[i].length; j++) {
      if (parseInt(binaryList[i][j])) {
        drumList[i].playTriggers.push(true);
      } else {
        drumList[i].playTriggers.push(false);
      }
    }
  }
  return drumList;
}
