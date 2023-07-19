import BoardHangman from "../components/BoardHangman/BoardHangman"
import ContainerButtons from "../components/ContainerButtons/ContainerButtons"
import FooterSection from "../components/FooterSection/FooterSection"
import HeaderSection from "../components/HeaderSection/HeaderSection"

const Hangman = () => {
  return (
    <main>

      <HeaderSection text="Bienvenido al juego del Ahorcado" />
      <ContainerButtons />
      <BoardHangman />
      <FooterSection />

  </main>
  )
}

export default Hangman