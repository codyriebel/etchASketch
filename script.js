let grayscale = true;
let shadeActive = true;
let randomColor = false;
let choseAColor = false;

let color = (event) => {
  let currentSquare = event.target;
  let currentColor = currentSquare.style.backgroundColor;
  let currentRgb = (currentColor.split(',').slice(0,3)).toString();
  let currentAlpha = (currentColor.split(',')[3].slice(0,4)).toString();

  if (grayscale === true ) {
    if (currentRgb != 'rgba(0,0,0,') {
      currentRgb = 'rgba(0,0,0,';
    }
  }

  else if (randomColor === true) {
    currentRgb = getRandomColor();
  }

  else if (choseAColor === true) {
    let chosen = document.querySelector('#chooseColor');
    let rgbPair = (chosen.value).match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    let rgbCalc = [
      parseInt(rgbPair[1], 16),
      parseInt(rgbPair[2], 16),
      parseInt(rgbPair[3], 16),
    ];
    currentRgb = `rgba(${rgbCalc[0]},${rgbCalc[1]},${rgbCalc[2]},`;
  }

  if (shadeActive === true) {
    if (+currentAlpha != 0.9) {
      currentAlpha = +currentAlpha + 0.1;
    }
  } 

  let newColor = `${currentRgb}${currentAlpha})`;
  console.log(newColor);
  event.target.style.backgroundColor = newColor;

}

function getRandomColor() {
  randomR = Math.floor(Math.random() * 255);
  randomG = Math.floor(Math.random() * 255);
  randomB = Math.floor(Math.random() * 255);
  return `rgba(${randomR},${randomG},${randomB},`;
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
}

let removeGrid = () => {
  let rows = document.querySelectorAll('.rowContainer');
  let rowsArr = Array.from(rows);
  for (r of rowsArr) {
    r.remove();
  }
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

let createGrid = (size) => {
  let grid = document.querySelector('#grid');
  for (col = 0; col < size; col++) {
    let rowContainer = document.createElement('div');
    rowContainer.classList.add('rowContainer');
    grid.appendChild(rowContainer);
    for (row = 0; row < size; row++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
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

let clearGrid = () => {
  let squares = document.querySelectorAll('.square');
  let squaresArr = Array.from(squares);
  for (s of squaresArr) {
    s.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
  }
}

let shade = () => {
  if (shadeActive === true) {
    shadeActive = false;
    shading.textContent = 'shading on';
  } else {
    shadeActive = true;
    shading.textContent = 'shading off';
  }
}

// initial grid size
createGrid(16);

let buttonNumSquare = document.querySelector('#buttonNumSquare');
buttonNumSquare.addEventListener('click', newGrid);

let buttonRandomColors = document.querySelector('#buttonRandomColors');
buttonRandomColors.addEventListener('click', randomColors);

let shading = document.querySelector('#shading');
shading.addEventListener('click', shade);

let colorChoice = document.querySelector('#chooseColor');
colorChoice.addEventListener('click', chooseColor);

let clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid)

