let hover = (event) => event.target.classList.toggle('hover');

let gridContainer = document.querySelector('#grid');

for (row = 0; row < 16; row++) {
  for (col = 0; col < 16; col++) {
    let square = document.createElement('div');
    square.classList.add('square')
    gridContainer.appendChild(square)
    square.addEventListener('mouseenter', hover)
    square.addEventListener('mouseleave', hover)
  }
}

