const pianoLabels = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K'];

function generatePiano() {
  const table = document.getElementById('piano');
  const volumeBox = document.createElement('div');
  volumeBox.id = 'piano-volume';
  volumeBox.textContent = 'Volume';
  table.parentElement.parentElement.insertBefore(
    volumeBox,
    table.parentElement,
  );
  const row = document.createElement('tr');
  // row.appendChild(volumeBox);
  const pianoVolumeSlider = document.createElement('input');
  pianoVolumeSlider.type = 'range';
  pianoVolumeSlider.min = '0';
  pianoVolumeSlider.max = '1';
  pianoVolumeSlider.step = '.1';
  pianoVolumeSlider.id = 'piano-slider';
  pianoVolumeSlider.addEventListener('change', handlePianoVolumeChange);
  volumeBox.appendChild(pianoVolumeSlider);
  let pianoKey;
  for (let i = 0; i < pianoLabels.length; i++) {
    pianoKey = document.createElement('td');
    pianoKey.setAttribute('id', pianoLabels[i]);
    pianoKey.addEventListener('click', handlePianoClick);
    row.appendChild(pianoKey);
    pianoKey.textContent = pianoLabels[i];
  }
  table.appendChild(row);
}
generatePiano();
