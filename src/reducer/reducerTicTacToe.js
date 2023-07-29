const originalBoardTicTacToe = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

export const INITIAL_STATE_TIC_TAC_TOE = {
  starGame: false,
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

export const reducerTicTacToe = (state, action) => {
  switch (action.type) {
    case "INICIAR_PARTIDA":
      return {
        ...state,
        starGame: true,
      };
    case "REINICIAR_PARTIDA":
      return {
        ...state,
        turn: "",
        boardTicTacToe: [...originalBoardTicTacToe],
        winner: false,
        winnerO: 0,
        winnerX: 0,
        tied: 0,
      };
    case "SELECCIONAR_FICHA_X":
      return {
        ...state,
        turn: "X",
      };
    case "SELECCIONAR_FICHA_O":
      return {
        ...state,
        turn: "O",
      };
    case "CAMBIAR_FICHA_TURNO":
      return {
        ...state,
        turn: state.turn === "X" ? "O" : "X",
      };
    case "HAY_UN_GANADOR":
      return {
        ...state,
        winner: true,
        openWinner: true,
      };
    case "GANADOR_X":
      return {
        ...state,
        winnerX: state.winnerX + 1,
      };
    case "GANADOR_O":
      return {
        ...state,
        winnerO: state.winnerO + 1,
      };
    case "EMPATE":
      return {
        ...state,
        tied: state.tied + 1,
        openTied: true,
      };
    case "GANADOR_VERTICAL":
      return {
        ...state,
        winnerPosition: "vertical",
      };
    case "GANADOR_HORIZONTAL":
      return {
        ...state,
        winnerPosition: "horizontal",
      };
    case "GANADOR_DIAGONAL":
      return {
        ...state,
        winnerPosition: "diagonal",
      };
    case "RESETEAR_PARTIDA":
      return {
        ...state,
        boardTicTacToe: [...originalBoardTicTacToe],
        winner: false,
      };
    case "CERRAR_MODAL_EMPATE":
      return {
        ...state,
        openTied: false,
      };
    case "CERRAR_MODAL_GANADOR":
      return {
        ...state,
        openWinner: false,
      };
    case "SALIR_JUEGO":
      return {
        ...state,
        starGame: false,
        boardTicTacToe: [...originalBoardTicTacToe],
      };
  }
};
