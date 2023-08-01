import BoardHangman from "../components/BoardHangman/BoardHangman";
import ContainerButtons from "../components/ContainerButtons/ContainerButtonBack";
import FooterSection from "../components/FooterSection/FooterSection";
import HeaderSection from "../components/HeaderSection/HeaderSection";
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
