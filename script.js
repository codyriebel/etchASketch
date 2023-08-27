let color = (event) => event.target.classList.add('color');


let removeGrid = () => {
  let squares = document.querySelectorAll('.square')
  squaresArr = Array.from(squares);
  for (square of squaresArr) {
    document.querySelector('#grid').removeChild(square);
  }
}

let createGrid = (size) => {
  let grid = document.querySelector('#grid');
  for (i = 0; i < size*size; i++) {
    let square = document.createElement('div');
    square.classList.add('square')
    grid.appendChild(square)
    square.addEventListener('mouseenter', color)
    //square.addEventListener('mouseleave', hover) 
  }
}

let newGrid = () => {
  removeGrid();
  let size = getGridSize();
  createGrid(size);
}

let getGridSize = () => {
  while (true) {
    let numSquare = prompt(
      'How many squares per side? (1 - 100)', '16'
    );
    if (parseInt(numSquare) > 100) {
      alert('MAX 100');
    } else if (parseInt(numSquare) < 1) {
      alert('MIN 0')
    } 
    return numSquare;
  }
}

createGrid(16);

let buttonNumSquare = document.querySelector('#buttonNumSquare');
buttonNumSquare.addEventListener('click', newGrid)