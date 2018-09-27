function playBeat() {
  for (var i = 0; i < allDrums.length; i++) {
    if (allDrums[i].playTriggers[currentBeat]) {
      allDrums[i].playDrum();
    }
  }
  const allBoxes = document.querySelectorAll('#grid-beat td');
  for (i = 0; i < allBoxes.length; i++) {
    if (allBoxes[i].getAttribute('count-index') == currentBeat) {
      allBoxes[i].style.borderColor = '#FFDB42';
    } else if (allBoxes[i].className != 'drum-label') {
      allBoxes[i].style.borderColor = '#1e1e1e';
    }
  }
  currentBeat++;
  currentBeat %= 16;

  document.getElementById('banana-beat').src = `banana/banana${
    bananas[currentBanana]
  }`;
  currentBanana++;
  currentBanana %= 8;
}

function randomColor() {
  return `hsl(${Math.random() * 360}, 80%, 50%)`;
}

export const reinsert = (arr, from, to) => {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
};
