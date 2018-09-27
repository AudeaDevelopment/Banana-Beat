// SAVING TO LOCALSTORAGE FUNCTIONALITY

// retrieve saved states
let savedStates = [];

try {
  savedStates = JSON.parse(localStorage.savedStates);
} catch (error) {
  console.info('No saved states available.');
}

for (let save = 0; save < savedStates.length; save++) {
  generateSavedStateBox(savedStates[save], document.getElementById('saves'));
}

document
  .getElementById('save-form')
  .addEventListener('submit', handleSaveSubmit);

document
  .getElementById('clear-saves')
  .addEventListener('click', handleClearClick);

function handleSaveSubmit(e) {
  e.preventDefault();
  saveCurrentState(e.target.nameInput.value);
  e.target.reset();
}

function handleClearClick() {
  try {
    localStorage.clear();
    document.getElementById('saves').innerHTML = '';
  } catch (error) {
    console.error('Unable to access localStorage:', error);
  }
}

// saves the current state
function saveCurrentState(nameInput) {
  if (!gridIsEmpty()) {
    const currentState = {
      name: nameInput,
      setup: copyDrumsList(allDrums),
      tempo: bpm,
    };
    savedStates.push(currentState);
    generateSavedStateBox(currentState, document.getElementById('saves'));
    try {
      localStorage.savedStates = JSON.stringify(savedStates);
    } catch (error) {
      console.error('Unable to save to localStorage:', error);
    }
  }
}

// returns a new div with a saved state
function generateSavedStateBox(state, allSavedBoxes) {
  const saveBox = document.createElement('div');
  saveBox.className = 'saved-state';
  allSavedBoxes.appendChild(saveBox);

  const saveStateBox = document.createElement('div');
  saveStateBox.innerHTML = `${state.name}<br/>${state.tempo} bpm`;
  saveBox.appendChild(saveStateBox);

  saveStateBox.addEventListener('click', () => {
    loadDrumSetup(state.setup);
    loadTempo(state.tempo);
  });

  const removeBox = document.createElement('button');
  removeBox.className = 'delete-button';
  removeBox.textContent = 'delete';
  saveBox.appendChild(removeBox);

  removeBox.addEventListener('click', e => {
    handleDeleteClick(e, state);
  });
}

function handleDeleteClick(e, state) {
  const saveBox = e.target.parentElement;
  saveBox.parentElement.removeChild(saveBox);

  savedStates.splice(savedStates.indexOf(state), 1);
  try {
    localStorage.savedStates = JSON.stringify(savedStates);
  } catch (error) {
    console.error('Unable to access localStorage:', error);
  }
}

// takes a list of drums as a drum setup and loads it to the grid
function loadDrumSetup(drumList) {
  const table = document.getElementById('grid-beat');
  // table.textContent = '';
  const newTable = document.createElement('table');
  newTable.id = 'grid-beat';
  table.parentElement.replaceChild(newTable, table);

  allDrums = [];

  allDrums = copyDrumsList(drumList);
  generateTable(allDrums);

  resetExportCode();
}

function loadTempo(tempo) {
  bpm = tempo;
  tempoSlider.value = bpm;
  tempoValue.value = bpm;
  const isPlaying = document.getElementById('banana-spiral').className === 'spinning';
  if (isPlaying) {
    clearInterval(playingInterval);
    playingInterval = setInterval(playBeat, MINUTE / (bpm * 4));
    const spinSpeed = 9 - ((bpm - 20) / 180) * 8;
    document.getElementById(
      'banana-spiral',
    ).style.animationDuration = `${spinSpeed}s`;
  }
}
