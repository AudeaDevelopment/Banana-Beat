function Drum(name, sample) {
  this.context = audioContext;
  this.drumGain = audioContext.createGain();
  this.drumGain.gain.value = 0;
  this.name = name;
  this.sample = sample;
  this.playTriggers = new Array(16).fill(false);
  this.soundVolume = 0.5;
  this.muted = false;
}
