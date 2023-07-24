import { useContext } from "react";
import { styled } from "styled-components";
import { hangmanContext } from "../../../context/hangmanContext";

const ContainerFinishHangman = styled.div`
  color: var(--color-contrast);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  > img {
    width: 50%;
    height: auto;
  }
`;

const AlertHangman = () => {
  const { arrayGame, selectedWord } = useContext(hangmanContext);

  return arrayGame.includes(null) ? (
    <ContainerFinishHangman>
      <h3>
        ¡Lo siento, esta vez no lo has logrado! ¿Te animas a intentarlo de nuevo? 🤔
      </h3>
      <h3>La palabra secreta es: {selectedWord.join("")}</h3>

      <img
        src="https://i.pinimg.com/originals/58/d7/6d/58d76dcae19b938668508061cec0b749.gif"
        alt="gif-hug"
      />
    </ContainerFinishHangman>
  ) : (
    <ContainerFinishHangman>
      <h3>
        ¡Felicidades! Has adivinado la palabra correctamente. Eres genial, ¡bien hecho! 🚀
      </h3>
      <img
        src="https://i.pinimg.com/originals/09/94/25/09942513a4ed27dc9a2e6ee9596e4ebe.gif"
        alt="gif-winner"
      />
    </ContainerFinishHangman>
  );
};

export default AlertHangman;
