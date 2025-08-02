const board = document.querySelector('.board');

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

function fillPixel(elem) {
  elem.style.backgroundColor = 'black';
}

buildBoard();

//********************* 
// Todo: select color to paint with.