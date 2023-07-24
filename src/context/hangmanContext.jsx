import { createContext, useReducer } from "react";
import { INITIAL_STATE_HANGMAN, reducerHangman } from "../reducer/reducerHangman";

export const hangmanContext = createContext();

const HangmanContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerHangman, INITIAL_STATE_HANGMAN);

  const {
    initialGame,
    restart,
    chance,
    wrongLetters,
    selectedWord,
    arrayGame,
    selectedLetters,
  } = state;

  return (
    <hangmanContext.Provider
      value={{
        initialGame,
        restart,
        chance,
        wrongLetters,
        selectedWord,
        arrayGame,
        selectedLetters,
        dispatch,
      }}
    >
      {children}
    </hangmanContext.Provider>
  );
};

export default HangmanContextProvider;