const originalBoardTicTacToe = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export const INITIAL_STATE_TIC_TAC_TOE = {
  starGame: false,
  round: 1, //TURNO!!!
  winnerPosition: "",
  winnerX: 0,
  winnerO: 0,
  tied: 0,
  openWinner: false, //GANADOR!!! open1
  openTied: false, //EMPATE!!! open2
  turn: "",
  winner: false,
  boardTicTacToe: [...originalBoardTicTacToe],
};
