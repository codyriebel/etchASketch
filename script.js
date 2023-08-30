let grayscale = true;
let shadeActive = true;
let randomColor = false;
let choseAColor = false;
let gridShown = true;

let color = (event) => {
  let currentSquare = event.target;
  let currentColor = currentSquare.style.backgroundColor;
  let newColor;

  if (grayscale === true ) {
    newColor = 'rgb(200, 200, 200)';
  }
  

  if (randomColor === true) {
    newColor = getRandomColor();
  }

  if (choseAColor === true) {
    let chosen = document.querySelector('#chooseColor');
    let rgbPair = (chosen.value).match(
      /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i
    );
    let rgbCalc = [
      parseInt(rgbPair[1], 16),
      parseInt(rgbPair[2], 16),
      parseInt(rgbPair[3], 16),
    ];
    newColor = `rgb(${rgbCalc[0]}, ${rgbCalc[1]}, ${rgbCalc[2]})`;
  }

  if (shadeActive === true) {
  let rgbValues; 
    if (currentColor === '') {
      currentColor = newColor;
    }
    rgbValues = currentColor.match(/[\d]{1,3}/g);
    let newRgb = rgbValues.map((value) => parseInt(value) - 20);
    let [r, g, b] = newRgb;
    newColor = `rgb(${r},${g},${b})`;
  } 

  event.target.style.backgroundColor = newColor;
}

function getRandomColor() {
  randomR = Math.floor(Math.random() * 255);
  randomG = Math.floor(Math.random() * 255);
  randomB = Math.floor(Math.random() * 255);
  return `rgb(${randomR}, ${randomG}, ${randomB})`;
}

let randomColors = () => {
  choseAColor = false;
  
  if (buttonRandomColors.textContent === 'grayscale') {
    randomColor = false;
    grayscale = true;
    buttonRandomColors.textContent = 'random colors';
  } else {
    randomColor = true;
    grayscale = false;
    buttonRandomColors.textContent = 'grayscale';
  }

}

let chooseColor = () => {
  choseAColor = true;
  grayscale = false;
  randomColor = false;
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
      continue;
    } else if (parseInt(numSquare) < 1) {
      alert('MIN 0');
      continue;
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
      if (gridShown === true) {
        square.classList.add('gridlines');
      }
      rowContainer.appendChild(square);
      square.addEventListener('mouseenter', color);
    }
  }
}

let newGrid = () => {
  let size = getGridSize();
  if (size !== null) {
    removeGrid();
    createGrid(size);
  }
}

let clearGrid = () => {
  let squares = document.querySelectorAll('.square');
  let squaresArr = Array.from(squares);
  for (s of squaresArr) {
    s.style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

let shade = () => {
  shading.classList.toggle('active');
  if (shadeActive === true) {
    shadeActive = false;
  } else {
    shadeActive = true;
  }
}

let toggleGrid = () => {
  if (gridShown === true) {
    gridShown = false;
  } else {
    gridShown = true;
  }

  gridlines.classList.toggle('active');
  let squares = document.querySelectorAll('.square');
  let squaresArr = Array.from(squares);
  for (s of squaresArr) {
    s.classList.toggle('gridlines');
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

let gridlines = document.querySelector('#gridlines');
gridlines.addEventListener('click', toggleGrid);

let colorChoice = document.querySelector('#chooseColor');
colorChoice.addEventListener('click', chooseColor);

let clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid)

