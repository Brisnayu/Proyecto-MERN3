import HeaderSection from "../components/HeaderSection/HeaderSection";
import FooterSection from "../components/FooterSection/FooterSection";
import ContainerButtons from "../components/ContainerButtons/ContainerButtons";
import BoardTictactoe from "../components/BoardTictactoe/BoardTictactoe";
import TicTacToeContextProvider from "../context/tictactoeContext";

const Tictactoe = () => {
  return (
    <>
      <main>
        <TicTacToeContextProvider>
          <HeaderSection text="Bienvenido al juego Tres en Raya" />

          <ContainerButtons />

          <BoardTictactoe />

          <FooterSection />
        </TicTacToeContextProvider>
      </main>
    </>
  );
};

export default Tictactoe;
