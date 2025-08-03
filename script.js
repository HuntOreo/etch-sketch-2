const board = document.querySelector('.board');
const eraser = document.querySelector('.eraser');
const colorBtns = document.querySelectorAll('button.color');

// Colors //
const _ERASER = '#2f4f4f';
const _CUSTOM_COLOR = '#000';
const _BLACK = '#000';
let _CURRENT_COLOR = _BLACK;

function buildBoard() {
  const boardSize = 80;

  // Build board, one column at a time.
  for (let i = 0; i < boardSize; i++) {
    const column = document.createElement('div');
    column.classList.toggle('column');
    for (let j = 0; j < boardSize; j++) {
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
}

function fillTile(elem) {
  elem.style.backgroundColor = _CURRENT_COLOR;;
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