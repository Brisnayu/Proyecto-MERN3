import { solvepuzzle } from "sudoku";

export const readyComparation = (resolutionSudoku, dispatch) => {
  const found = resolutionSudoku.find((valor) => valor === null);

  found === null
    ? dispatch({ type: "HAY_CASILLAS_LIBRES" })
    : dispatch({ type: "NO_HAY_CASILLAS_LIBRES" });
};

export const equality = (
  originalSudokuBoard,
  resolutionSudoku,
  setNewArray,
  dispatch,
) => {
  const arrayEquality = [];

  for (let i = 0; i < solvepuzzle(originalSudokuBoard).length; i++) {
    if (solvepuzzle(originalSudokuBoard)[i] === resolutionSudoku[i]) {
      arrayEquality.push(solvepuzzle(originalSudokuBoard)[i] + 1);
    } else {
      arrayEquality.push((solvepuzzle(originalSudokuBoard)[i] + 1).toString());
    }
  }

  const result =
    JSON.stringify(solvepuzzle(originalSudokuBoard)) === JSON.stringify(resolutionSudoku);

  if (result === true) {
    dispatch({ type: "GANAR" });
  }

  setNewArray(arrayEquality);
};
