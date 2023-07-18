import { makepuzzle, solvepuzzle } from "sudoku";

export const InitialGame = (setOriginalSudokuBoard, setResolutionSudoku) => {
  const newBoard = makepuzzle();
  setOriginalSudokuBoard(newBoard);
  setResolutionSudoku(newBoard);
};

export const handleShowSolution = (resolut, setShowSolution) => {
  if (resolut === true) {
    setShowSolution("");
  } else {
    setShowSolution("visible");
  }
};

export const readyComparation = (
  resolutionSudoku,
  setCasillas,
  setIncomplete,
  setOpenAlert,
) => {
  const found = resolutionSudoku.find((valor) => valor === null);

  found === null
    ? (setCasillas(false), setIncomplete(true))
    : (setCasillas(true), setIncomplete(false));

  setOpenAlert(true);
};

//comparación de los dos arrays
export const equality = (originalSudokuBoard, resolutionSudoku, setWin, setNewArray) => {
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

  setWin(result);

  setNewArray(arrayEquality);
};
