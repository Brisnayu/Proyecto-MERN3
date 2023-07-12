import BoardSudoku from "../components/BoardSudoku/BoardSudoku";
import ContainerButtons from "../components/ContainerButtons/ContainerButtons";
import FooterSection from "../components/FooterSection/FooterSection";
import HeaderSection from "../components/HeaderSection/HeaderSection";

const Sudoku = () => {
  return (
    <main>
      <HeaderSection text="Bienvenido al juego Sudoku" />
      <ContainerButtons />
      <BoardSudoku />
      <FooterSection />
    </main>
  );
};

export default Sudoku;
