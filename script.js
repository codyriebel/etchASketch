let color = (event) => {
  if (touches > 0) {
    touches -= 1;
  };

  if (randomColor === true) {
    clr = getRandomColor();
    event.target.style.backgroundColor = (clr);
  } else if (choseAColor === true) {
    let chosen = document.querySelector('#chooseColor');
    event.target.style.backgroundColor = chosen.value;
  } else if (grayscale === true ) {
    event.target.style.backgroundColor = `#${touches}${touches}${touches}`;
  }
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let hexcolor = '#';
  for (let i = 0; i < 6; i++) {
    hexcolor += letters[Math.floor(Math.random() * 16)];
  }
  return hexcolor;
}

let randomColors = () => {
  choseAColor = false;
  if (randomColor === false) {
    randomColor = true;
    grayscale = false;
    buttonRandomColors.textContent = 'grayscale';
  } else {
    randomColor = false;
    grayscale = true;
    buttonRandomColors.textContent = 'random colors';
  }
}

let chooseColor = () => {
  choseAColor = true;
  randomColor = false;
  grayscale = false;
  choice.type = 'color';
  colorChoice.remove();
  let buttonContainer = document.querySelector('.buttonContainer');
  buttonContainer.appendChild(choice);
}

let removeGrid = () => {
  let rows = document.querySelectorAll('.rowContainer');
  let rowsArr = Array.from(rows);
  for (r of rowsArr) {
    r.remove();
  }
}

let createGrid = (size) => {
  let grid = document.querySelector('#grid');
  for (col = 0; col < size; col++) {
    let rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    grid.appendChild(rowContainer);
    for (row = 0; row < size; row++) {
      let square = document.createElement('div');
      square.classList.add('square');
      rowContainer.appendChild(square);
      square.addEventListener('mouseenter', color);
    }
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
      alert('MIN 0');
    } 
    return numSquare;
  }
}

let clearGrid = () => {
  let squares = document.querySelectorAll('.square');
  let squaresArr = Array.from(squares);
  for (s of squaresArr) {
    s.style.backgroundColor = '#fff';
  }
}

createGrid(16);

let buttonNumSquare = document.querySelector('#buttonNumSquare');
buttonNumSquare.addEventListener('click', newGrid);

let buttonRandomColors = document.querySelector('#buttonRandomColors');
buttonRandomColors.addEventListener('click', randomColors);

let randomColor = false;

let grayscale = true;

let colorChoice = document.querySelector('#chooseColor');
colorChoice.addEventListener('click', chooseColor);

let choseAColor = false;

let clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid)

let touches = 10;