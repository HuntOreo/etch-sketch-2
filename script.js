const board = document.querySelector('.board');
const eraser = document.querySelector('.eraser');
// Colors //
const _ERASER = '#2f4f4f';
const _RED = '#f00';
const _GREEN = '#0f0';
const _BLUE = '#00f';
const _YELLOW = '#ff0';
const _BLACK = '#000';
const _WHITE = '#fff';
const _CUSTOM_COLOR = '#000';
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

eraser.addEventListener('click', (event) => erasePixel(event.target))

function fillPixel(elem) {
  elem.style.backgroundColor = _CURRENT_COLOR;
}

function erasePixel(elem) {
  _CURRENT_COLOR = _ERASER;
}

buildBoard();

//********************* 
// Todo: Eraser functionality 
// Todo: select color to paint with.