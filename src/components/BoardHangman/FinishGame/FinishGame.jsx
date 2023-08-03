import { useContext } from "react";
import { hangmanContext } from "../../../context/hangmanContext";
import ResultHangman from "../ResultHangman/ResultHangman";

const FinishGame = () => {
  const { arrayGame, selectedWord } = useContext(hangmanContext);

  return arrayGame.includes(null) ? (
    <ResultHangman
      text={`¡Lo siento, esta vez no lo has logrado! 😣 La palabra secreta es: ${selectedWord.join(
        "",
      )}`}
      gif="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1691076979/Proyecto6%2C%20Hub%20de%20Juegos/git-abrazo_z6ah0k.gif"
      alt="gif-hug"
      question="¿Te animas a intentarlo de nuevo? 🤔"
    />
  ) : (
    <ResultHangman
      text="¡Felicidades! Has adivinado la palabra correctamente. Eres genial, ¡bien hecho! 🚀"
      gif="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1691076980/Proyecto6%2C%20Hub%20de%20Juegos/gif-bailando_hzcj3m.gif"
      alt="gif-winner"
      question="¿Deseas desafiar al juego una vez más? 🤔"
    />
  );
};

export default FinishGame;
