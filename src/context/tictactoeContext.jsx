import { createContext, useReducer } from "react";

import { INITIAL_STATE_TIC_TAC_TOE, reducerTicTacToe } from "../reducer/reducerTicTacToe";

export const tictactoeContext = createContext();

const TicTacToeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerTicTacToe, INITIAL_STATE_TIC_TAC_TOE);

  const {
    starGame,
    winnerPosition,
    winnerX,
    winnerO,
    tied,
    openWinner,
    openTied,
    turn,
    winner,
  } = state;

  return (
    <tictactoeContext.Provider
      value={{
        starGame,
        winnerPosition,
        winnerX,
        winnerO,
        tied,
        openWinner,
        openTied,
        turn,
        winner,
        dispatch,
      }}
    >
      {children}
    </tictactoeContext.Provider>
  );
};

export default TicTacToeContextProvider;
