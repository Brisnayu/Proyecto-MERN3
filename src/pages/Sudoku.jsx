import BoardSudoku from "../components/BoardSudoku/BoardSudoku";
import ContainerButtons from "../components/ContainerButtons/ContainerButtonBack";
import FooterSection from "../components/FooterSection/FooterSection";
import HeaderSection from "../components/HeaderSection/HeaderSection";
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
