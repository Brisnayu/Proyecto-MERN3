import HeaderSection from "../components/HeaderSection/HeaderSection";
import FooterSection from "../components/FooterSection/FooterSection";
import ContainerButtons from "../components/ContainerButtons/ContainerButtons";
import BoardTictactoe from "../components/BoardTictactoe/BoardTictactoe";

const Tictactoe = () => {

  return (
    <>
      <main>
        <HeaderSection text="Bienvenido al juego Tres en Raya" />
        
        <ContainerButtons />

        <BoardTictactoe />

        <FooterSection />
      </main>
    </>
  );
};

export default Tictactoe;
