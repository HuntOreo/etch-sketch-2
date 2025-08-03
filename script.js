const board = document.querySelector('.board');
const eraser = document.querySelector('.eraser');
const colorBtns = document.querySelectorAll('button.color');

// Colors //
const _ERASER = '#2f4f4f';
const _CUSTOM_COLOR = '#000';
const _BLACK = '#000';
let _CURRENT_COLOR = _BLACK;

function buildBoard() {
  const boardSize = 50;

  // Build board, one column at a time.
  for (let i = 0; i < boardSize; i++) {
    const column = document.createElement('div');
    column.classList.toggle('column');
    for (let j = 0; j < boardSize; j++) {
      const pixel = document.createElement('div');

      // Listen for when a pixel is painted.
      pixel.addEventListener('click', event => fillPixel(event.target));
      pixel.addEventListener('mouseover', event => {
        const isMouseClicked = event.buttons === 1 ? true : false;
        if (isMouseClicked) { fillPixel(event.target); };
      });

      column.appendChild(pixel);
      pixel.classList.toggle('pixel');
      pixel.classList.toggle('noselect'); // Prevents the 'ghosting' effect.
    };
    board.appendChild(column);
  };
}

eraser.addEventListener('click', (event) => erasePixel(event.target));
colorBtns.forEach(btn => btn.addEventListener('click', (event) => {
  chooseColor(event.target);
}));

function fillPixel(elem) {
  elem.style.backgroundColor = _CURRENT_COLOR;
}

function erasePixel(elem) {
  _CURRENT_COLOR = _ERASER;
}

function chooseColor(elem) {
  const chosenColor = getComputedStyle(elem)["backgroundColor"];
  _CURRENT_COLOR = chosenColor;
}

buildBoard();

//*************************************** 
// Todo: select color to paint with.