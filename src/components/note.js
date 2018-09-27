let octave = 0;
const octaveChange = document.getElementById('octave-menu');

function handleOctaveChange(e) {
  octave = e.target.value - 4;
}
octaveChange.addEventListener('change', handleOctaveChange);

let waveType = 'sine';
const waveChange = document.getElementById('wave-menu');

function handleWaveChange(e) {
  waveType = e.target.value;
}

waveChange.addEventListener('change', handleWaveChange);

let oscVolume = 0.5;

function handlePianoVolumeChange(e) {
  oscVolume = e.target.value;
}
function Note(frequency, name) {
  this.frequency = frequency * Math.pow(2, octave);
  this.osc = audioContext.createOscillator();
  this.osc.type = waveType;
  this.osc.frequency.value = this.frequency;
  this.gain = audioContext.createGain();
  this.gain.gain.value = oscVolume;
  this.name = name;

  this.osc.connect(this.gain);
  this.gain.connect(audioContext.destination);
}

Note.prototype.start = function () {
  this.osc.start(0);
};

Note.prototype.stop = function () {
  this.gain.gain.setTargetAtTime(0, audioContext.currentTime, 0.015);
};
