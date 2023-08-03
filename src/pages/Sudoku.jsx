import BoardSudoku from "../components/BoardSudoku/BoardSudoku";
import ContainerButtons from "../components/ContainerButtons/ContainerButtonBack";
import SudokuContextProvider from "../context/sudokuContext";

const Sudoku = () => {
  return (
    <main>
      <SudokuContextProvider>
        <ContainerButtons />
        <BoardSudoku />
      </SudokuContextProvider>
    </main>
  );
};

export default Sudoku;
