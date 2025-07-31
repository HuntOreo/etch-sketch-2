const board = document.querySelector('.board');

function buildBoard() {
  const boardSize = 50;

  for (let i = 0; i < boardSize; i++) {
    const row = document.createElement('div');
    row.classList.toggle('row');
    for (let j = 0; j < boardSize; j++) {
      const pixel = document.createElement('div');
      row.appendChild(pixel);
      pixel.classList.toggle('pixel');
    };
    board.appendChild(row);
  };

}

buildBoard();