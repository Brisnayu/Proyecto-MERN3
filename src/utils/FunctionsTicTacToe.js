export const changedBoardTicTacToe = (
  boardTicTacToe,
  turn,
  setBoardTicTacToe,
  indexColumn,
  indexRow,
  dispatch,
) => {
  const position = [...boardTicTacToe];

  if (position[indexRow][indexColumn] === null) {
    position[indexRow][indexColumn] = turn;
    dispatch({ type: "CAMBIAR_FICHA_TURNO" });
  }

  setBoardTicTacToe(position);
};

export const getArraySolutions = (boardTicTacToe, turn, dispatch) => {
  const getWinner = () => {
    dispatch({ type: "HAY_UN_GANADOR" });
    if (turn === "X") {
      dispatch({ type: "GANADOR_X" });
    } else if (turn === "O") {
      dispatch({ type: "GANADOR_O" });
    }
  };

  if (
    boardTicTacToe[0][0] === boardTicTacToe[1][0] &&
    boardTicTacToe[1][0] === boardTicTacToe[2][0] &&
    boardTicTacToe[0][0] !== null
  ) {
    getWinner();
    return dispatch({ type: "GANADOR_VERTICAL" });
  } else if (
    boardTicTacToe[0][1] === boardTicTacToe[1][1] &&
    boardTicTacToe[1][1] === boardTicTacToe[2][1] &&
    boardTicTacToe[0][1] !== null
  ) {
    getWinner();
    return dispatch({ type: "GANADOR_VERTICAL" });
  } else if (
    boardTicTacToe[0][2] === boardTicTacToe[1][2] &&
    boardTicTacToe[1][2] === boardTicTacToe[2][2] &&
    boardTicTacToe[0][2] !== null
  ) {
    getWinner();
    return dispatch({ type: "GANADOR_VERTICAL" });
  } else if (
    boardTicTacToe[0][0] === boardTicTacToe[1][1] &&
    boardTicTacToe[1][1] === boardTicTacToe[2][2] &&
    boardTicTacToe[0][0] !== null
  ) {
    getWinner();
    return dispatch({ type: "GANADOR_DIAGONAL" });
  } else if (
    boardTicTacToe[0][2] === boardTicTacToe[1][1] &&
    boardTicTacToe[1][1] === boardTicTacToe[2][0] &&
    boardTicTacToe[0][2] !== null
  ) {
    getWinner();
    return dispatch({ type: "GANADOR_DIAGONAL" });
  }

  for (let i = 0; i < 3; i++) {
    const horizontalComparative = boardTicTacToe[i].reduce(
      (acc, next) =>
        acc && next === boardTicTacToe[i][0] && boardTicTacToe[i][0] !== null,
      true,
    );

    if (horizontalComparative === true) {
      getWinner();
      return dispatch({ type: "GANADOR_HORIZONTAL" });
    }
  }

  const result = boardTicTacToe.flat();
  const prueba = result.find((valor) => valor === null);

  if (prueba !== null) {
    // console.log("no hay ganador y no hay más casillas!")
    dispatch({ type: "EMPATE" });
  }
};
