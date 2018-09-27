let beatBox;
for (let i = 0; i < drum.playTriggers.length; i++) {
  beatBox = document.createElement('td');
  if (drum.playTriggers[i]) {
    beatBox.className = 'on';
    beatBox.style.background = randomColor();
  } else {
    beatBox.className = 'off';
    beatBox.style.background = 'none';
  }
  beatBox.setAttribute('count-index', i);
  row.appendChild(beatBox);
  beatBox.addEventListener('click', e => {
    toggleTrigger(e, drum);
  });
}
row.setAttribute('id', drumRow);
table.appendChild(row);
