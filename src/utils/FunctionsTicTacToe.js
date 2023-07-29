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

export const getArraySolutions = (
  setWinner,
  setOpen1,
  setWinnerX,
  winnerX,
  setWinnerO,
  winnerO,
  boardTicTacToe,
  setWinnerPosition,
  setOpen2, 
  setTied,
  turn, 
  tied
) => {
  const getWinner = () => {
    setWinner(true);
    setOpen1(true);
    if (turn === "X") {
      setWinnerX(winnerX + 1);
    } else if (turn === "O") {
      setWinnerO(winnerO + 1);
    }
  };

  if (
    boardTicTacToe[0][0] === boardTicTacToe[1][0] &&
    boardTicTacToe[1][0] === boardTicTacToe[2][0] &&
    boardTicTacToe[0][0] !== null
  ) {
    getWinner();
    return setWinnerPosition("vertical");
  } else if (
    boardTicTacToe[0][1] === boardTicTacToe[1][1] &&
    boardTicTacToe[1][1] === boardTicTacToe[2][1] &&
    boardTicTacToe[0][1] !== null
  ) {
    getWinner();
    return setWinnerPosition("vertical");
  } else if (
    boardTicTacToe[0][2] === boardTicTacToe[1][2] &&
    boardTicTacToe[1][2] === boardTicTacToe[2][2] &&
    boardTicTacToe[0][2] !== null
  ) {
    getWinner();
    return setWinnerPosition("vertical");
  } else if (
    boardTicTacToe[0][0] === boardTicTacToe[1][1] &&
    boardTicTacToe[1][1] === boardTicTacToe[2][2] &&
    boardTicTacToe[0][0] !== null
  ) {
    getWinner();
    return setWinnerPosition("diagonal");
  } else if (
    boardTicTacToe[0][2] === boardTicTacToe[1][1] &&
    boardTicTacToe[1][1] === boardTicTacToe[2][0] &&
    boardTicTacToe[0][2] !== null
  ) {
    getWinner();
    return setWinnerPosition("diagonal");
  }

  for (let i = 0; i < 3; i++) {
    const horizontalComparative = boardTicTacToe[i].reduce(
      (acc, next) =>
        acc && next === boardTicTacToe[i][0] && boardTicTacToe[i][0] !== null,
      true,
    );

    if (horizontalComparative === true) {
      getWinner();
      return setWinnerPosition("horizontal");
    }
  }

  const result = boardTicTacToe.flat();
  const prueba = result.find((valor) => valor === null);

  if (prueba !== null) {
    // console.log("no hay ganador y no hay más casillas!")
    setOpen2(true);
    setTied(tied + 1);
  }
};
