import BoardSudoku from "../components/BoardSudoku/BoardSudoku";
import ContainerButtons from "../components/ContainerButtons/ContainerButtons";
import FooterSection from "../components/FooterSection/FooterSection";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import SudokuContextProvider from "../context/sudokuContext";

const Sudoku = () => {
  return (
    <main>
      <SudokuContextProvider>
        <HeaderSection text="Bienvenido al juego Sudoku" />
        <ContainerButtons />
        <BoardSudoku />
        <FooterSection />
      </SudokuContextProvider>
    </main>
  );
};

export default Sudoku;
