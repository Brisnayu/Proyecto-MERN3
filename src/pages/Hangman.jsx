import BoardHangman from "../components/BoardHangman/BoardHangman";
import ContainerButtons from "../components/ContainerButtons/ContainerButtonBack";
import HangmanContextProvider from "../context/hangmanContext";

const Hangman = () => {
  return (
    <main>
      <HangmanContextProvider>
        <ContainerButtons />
        <BoardHangman />
      </HangmanContextProvider>
    </main>
  );
};

export default Hangman;
