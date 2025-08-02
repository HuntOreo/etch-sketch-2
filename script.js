const board = document.querySelector('.board');

function buildBoard() {
  const boardSize = 50;

  // Build board, one row at a time.
  for (let i = 0; i < boardSize; i++) {
    const row = document.createElement('div');
    row.classList.toggle('row');
    for (let j = 0; j < boardSize; j++) {
      const pixel = document.createElement('div');

      // Listen for when a pixel is painted.
      pixel.addEventListener('click', event => fillPixel(event.target))
      pixel.addEventListener('mouseover', (event) => {
        if (event.buttons == 1) {
          fillPixel(event.target);
        }
      });

      row.appendChild(pixel);
      pixel.classList.toggle('pixel');
      pixel.classList.toggle('noselect') // Prevents the 'ghosting' effect.
    };
    board.appendChild(row);
  };
}

function fillPixel(elem) {
  elem.style.backgroundColor = 'black';
}

buildBoard();