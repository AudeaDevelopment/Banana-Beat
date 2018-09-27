const tempoValue = document.getElementById('tempo-value');
tempoValue.value = bpm;
const tempoSlider = document.getElementById('tempo-slider');
tempoSlider.value = bpm;
// listen for a change to the bpm
tempoValue.addEventListener('change', handleTempoChange);
tempoSlider.addEventListener('change', handleTempoChange);

function handleTempoChange(e) {
  let newBpm = Math.round(e.target.value);
  if (newBpm < 20) {
    newBpm = 20;
  } else if (newBpm > 200) {
    newBpm = 200;
  }
  loadTempo(newBpm);
  resetExportCode();
}
