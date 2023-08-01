import HeaderSection from "../components/HeaderSection/HeaderSection";
import FooterSection from "../components/FooterSection/FooterSection";
import ContainerButtons from "../components/ContainerButtons/ContainerButtonBack";
import BoardTictactoe from "../components/BoardTictactoe/BoardTictactoe";
import TicTacToeContextProvider from "../context/tictactoeContext";

const Tictactoe = () => {
  return (
    <>
      <main>
        <TicTacToeContextProvider>
          <ContainerButtons />
          <BoardTictactoe />
        </TicTacToeContextProvider>
      </main>
    </>
  );
};

export default Tictactoe;
