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
      gif="https://i.pinimg.com/originals/58/d7/6d/58d76dcae19b938668508061cec0b749.gif"
      alt="gif-hug"
      question="¿Te animas a intentarlo de nuevo? 🤔"
    />
  ) : (
    <ResultHangman
      text="¡Felicidades! Has adivinado la palabra correctamente. Eres genial, ¡bien hecho! 🚀"
      gif="https://i.pinimg.com/originals/09/94/25/09942513a4ed27dc9a2e6ee9596e4ebe.gif"
      alt="gif-winner"
      question="¿Deseas desafiar al juego una vez más? 🤔"
    />
  );
};

export default FinishGame;
