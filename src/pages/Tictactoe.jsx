import BoardTictactoe from "../components/BoardTictactoe/BoardTictactoe";
import ContainerButtons from "../components/ContainerButtons/ContainerButtonBack";
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
