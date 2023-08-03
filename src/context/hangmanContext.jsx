import { createContext, useReducer } from "react";
import { INITIAL_STATE_HANGMAN, reducerHangman } from "../reducer/reducerHangman";

export const hangmanContext = createContext();

const HangmanContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerHangman, INITIAL_STATE_HANGMAN);

  const {
    initialGame,
    chance,
    wrongLetters,
    selectedWord,
    arrayGame,
    selectedLetters,
    ready,
  } = state;

  return (
    <hangmanContext.Provider
      value={{
        initialGame,
        chance,
        wrongLetters,
        selectedWord,
        arrayGame,
        selectedLetters,
        ready,
        dispatch,
      }}
    >
      {children}
    </hangmanContext.Provider>
  );
};

export default HangmanContextProvider;
