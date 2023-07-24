import BoardHangman from "../components/BoardHangman/BoardHangman";
import ContainerButtons from "../components/ContainerButtons/ContainerButtons";
import FooterSection from "../components/FooterSection/FooterSection";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import HangmanContextProvider from "../context/hangmanContext";

const Hangman = () => {
  return (
    <main>
      <HangmanContextProvider>
        <HeaderSection text="Bienvenido al juego del Ahorcado" />
        <ContainerButtons />
        <BoardHangman />
        <FooterSection />
      </HangmanContextProvider>
    </main>
  );
};

export default Hangman;
