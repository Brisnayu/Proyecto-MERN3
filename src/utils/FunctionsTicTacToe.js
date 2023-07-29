export const changedBoardTicTacToe = (
  boardTicTacToe,
  turn,
  setTurn,
  setBoardTicTacToe,
  indexColumn,
  indexRow,
) => {
  const position = [...boardTicTacToe];
  const valueColumn = indexColumn;
  const valueRow = indexRow;

  if (position[valueColumn][valueRow] === null) {
    position[valueColumn][valueRow] = turn;
    turn === "X" ? setTurn("O") : setTurn("X");
  }

  setBoardTicTacToe(position);
};

