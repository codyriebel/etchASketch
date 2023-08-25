let gridContainer = document.querySelector('#gridContainer');

for (row = 0; row < 16; row++) {
  for (col = 0; col < 16; col++) {
    let square = document.createElement('div');
    square.classList.add('square')
    gridContainer.appendChild(square)
  }
}
