export const changedBoardTicTacToe = (
  boardTicTacToe,
  turn,
  setTurn,
  turnos,
  setTurnos,
  setBoardTicTacToe,
  indexColumn,
  indexRow,
) => {
  const position = [...boardTicTacToe];
  const valueColumn = indexColumn;
  const valueRow = indexRow;

  if (position[valueColumn][valueRow] === "") {
    position[valueColumn][valueRow] = turn;
    turn === "X" ? setTurn("O") : setTurn("X");
    setTurnos(turnos + 1);
  }

  setBoardTicTacToe(position);
};



export const getArraysSolutions = (
  boardTicTacToe,
  turnos,
  turn,
  setOpen1,
  setOpen2,
  setTied,
  setWinnerPosition,
  setWinner,
  setWinnerO,
  setWinnerX,
  winnerX,
  winnerO,
  tied,
) => {
  const newArrayVertical0 = [];
  const newArrayVertical1 = [];
  const newArrayVertical2 = [];

  const newArrayDiagonal0 = [];
  const newArrayDiagonal1 = [];

  for (let i = 0; i < 3; i++) {
    newArrayVertical0.push(boardTicTacToe[i][0]);
    newArrayVertical1.push(boardTicTacToe[i][1]);
    newArrayVertical2.push(boardTicTacToe[i][2]);

    newArrayDiagonal0.push(boardTicTacToe[i][i]);
    newArrayDiagonal1.push(boardTicTacToe[i][2 - i]);
  }

  const arrayVertical = [
    newArrayVertical0.map((element) => element),
    newArrayVertical1.map((element) => element),
    newArrayVertical2.map((element) => element),
  ];

  const arrayDiagonal = [
    newArrayDiagonal0.map((element) => element),
    newArrayDiagonal1.map((element) => element),
  ];

  for (let i = 0; i < 3; i++) {
    const horizontalComparative = boardTicTacToe[i].reduce(
      (acc, next) => acc && next === boardTicTacToe[i][0] && boardTicTacToe[i][0] !== "",
      true,
    );

    const verticalComparative = arrayVertical[i].reduce(
      (acc, next) => acc && next === arrayVertical[i][0] && arrayVertical[i][0] !== "",
      true,
    );

    if (horizontalComparative === true) {
      setWinnerPosition("horizontal");
      setWinner(true), setOpen1(true);
      if (turn === "X") {
        setWinnerX(winnerX + 1);
      } else if (turn === "O") {
        setWinnerO(winnerO + 1);
      }
    } else if (verticalComparative === true) {
      setWinnerPosition("vertical");
      setWinner(true), setOpen1(true);
      if (turn === "X") {
        setWinnerX(winnerX + 1);
      } else if (turn === "O") {
        setWinnerO(winnerO + 1);
      }
    }
  }

  for (let i = 0; i < 2; i++) {
    const diagonalComparative = arrayDiagonal[i].reduce(
      (acc, next) => acc && next === arrayDiagonal[i][0] && arrayDiagonal[i][0] !== "",
      true,
    );

    if (diagonalComparative === true) {
      setWinnerPosition("diagonal");

      if (turn === "X") {
        setWinnerX(winnerX + 1);
      } else if (turn === "O") {
        setWinnerO(winnerO + 1);
      }
      return setWinner(true), setOpen1(true);
    }
  }

  if (turnos > 8) {
    setOpen2(true);
    setTied(tied + 1);
  }
};
