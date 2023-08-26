let hover = (event) => event.target.classList.add('hover');

let colorSquare = (event) => {
  event.target.style.backgroundColor = 'black';
}

let removeGrid = (size) => {
  for (i = 0; i < size*size; i++) {
    gridContainer.removeChild(square);
  }
}

let createGrid = (size) => {
  for (i = 0; i < size*size; i++) {
    square = document.createElement('div');
    square.classList.add('square')
    gridContainer.appendChild(square)
    square.addEventListener('mouseenter', hover)
    //square.addEventListener('mouseleave', hover)
    //square.addEventListener('click', colorSquare) 
  }
}

let gridEvent = () => {
  removeGrid(numSquare);
  while (true) {
    numSquare = prompt('How many squares per side? (1 - 100)', '16');
    if (parseInt(numSquare) > 100) {
      alert('MAX 100');
    } else if (parseInt(numSquare) < 1) {
      alert('MIN 0')
    } else break;
  }
  createGrid(numSquare);
}

let gridContainer = document.querySelector('#grid');

let square;
let numSquare = 16;

let squareChoice = document.querySelector('#buttonNumSquare');
squareChoice.addEventListener('click', gridEvent)

createGrid(numSquare);