const board = document.querySelector('.board');
const eraser = document.querySelector('.eraser');
const colorBtns = document.querySelectorAll('button.color');

// screen size for checking if mobile
const mobileWidth = 850;
const mobileHeight = 1200;
let viewportWidth = window.innerWidth;
let viewportHeight = window.innerHeight;

// Colors //
const _ERASER = '#2f4f4f';
const _CUSTOM_COLOR = '#000';
const _BLACK = '#000';
let _CURRENT_COLOR = _BLACK;

const _BOARD_SIZE = 120;

function buildBoard() {
  // Build board, one column at a time.
  for (let i = 0; i < _BOARD_SIZE; i++) {
    const column = document.createElement('div');
    column.classList.toggle('column');
    for (let j = 0; j < _BOARD_SIZE; j++) {
      const tile = document.createElement('div');

      column.appendChild(tile);
      tile.classList.toggle('tile');
      tile.classList.toggle('noselect'); // Prevents the 'ghosting' effect.
    };
    board.appendChild(column);
  };
}

eraser.addEventListener('click', () => eraseTile());
colorBtns.forEach(btn => btn.addEventListener('click', (event) => {
  chooseColor(event.target);
}));

function handleBoardListeners() {
  const board = document.querySelector('.board');

  board.addEventListener('click', event => {
    const isTile = event.target.classList.contains('tile');
    if (isTile) {
      fillTile(event.target)
    }
  });

  board.addEventListener('mouseover', event => {
    const isMouseClicked = event.buttons === 1 ? true : false;
    const isTile = event.target.classList.contains('tile');

    if (isMouseClicked && isTile) { fillTile(event.target); };
  });

  // If on mobile:
  if (viewportWidth <= mobileWidth || viewportHeight <= mobileHeight) {
    handleMobileListeners();
  };

  window.addEventListener('resize', () => {
    viewportWidth = window.innerWidth;
    viewportHeight = window.innerHeight;

    // If on mobile:
    if (viewportWidth <= mobileWidth || viewportHeight <= mobileHeight) {
      handleMobileListeners();
    };
  });
}

function handleMobileListeners() {
  let isDrawing = false;

  board.addEventListener('touchstart', event => {

    if (event.touches.length === 1) {

      event.preventDefault();
      const isTile = event.target.classList.contains('tile');
      isDrawing = true;

      const touch = event.touches[0];
      const elem = document.elementFromPoint(touch.clientX, touch.clientY);
      if (elem && isTile) { fillTile(elem) };
    } else {
      return;
    }
  })

  board.addEventListener('touchmove', event => {
    event.preventDefault();
    if (!isDrawing) return;

    const touch = event.touches[0];
    const isTile = event.target.classList.contains('tile');
    const elem = document.elementFromPoint(touch.clientX, touch.clientY);
    if (isTile) { fillTile(elem); };
  });

  board.addEventListener('touchend', event => {
    event.preventDefault();
    isDrawing = false;
  });
}

function fillTile(elem) {
  elem.style.backgroundColor = _CURRENT_COLOR;
}

function eraseTile() {
  _CURRENT_COLOR = _ERASER;
}

function chooseColor(elem) {
  const chosenColor = elem.dataset.color;
  _CURRENT_COLOR = chosenColor;
}

buildBoard();
handleBoardListeners();