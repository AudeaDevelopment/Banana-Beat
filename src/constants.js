export const MINUTE = 60000;

export const bpm = 80;
export const currentBeat = 0;

export const sliderZIndex = 1000;

const playingInterval = setInterval(playBeat, MINUTE / (bpm * 4));
