import { createContext, useReducer } from "react";
import { INITIAL_STATE, reducer } from "../reducer/reducerSudoku";

export const sudokuContext = createContext();

const SudokuContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { solution, resolut, comprobation, win, casillas, incomplete, openAlert } = state;

  return (
    <sudokuContext.Provider
      value={{
        solution,
        resolut,
        comprobation,
        win,
        casillas,
        incomplete,
        openAlert,
        dispatch,
      }}
    >
      {children}
    </sudokuContext.Provider>
  );
};

export default SudokuContextProvider;
