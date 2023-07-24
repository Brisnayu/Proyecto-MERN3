import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { styled } from "styled-components";
import { ButtonSyled } from "../../UI/ButtonStyled";
import { hangmanContext } from "../../../context/hangmanContext";

export const ButtonLetters = styled.button`
  width: 90px;
  height: 90px;
  margin: 5px;
  font-size: 3rem;
  font-family: var(--font-text);
  background: transparent;
  color: transparent;
  font-weight: bold;
  border: 0;
  border-bottom: 3px solid var(--color-contrast);
`;

const ContainerAnswers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const ContainerGame = styled.div`
  display: flex;
  font-family: var(--font-title);
`;

const HangmanAnswers = () => {
  const { initialGame, selectedWord, arrayGame, chance, dispatch } =
    useContext(hangmanContext);

  console.log("arrayGame", arrayGame);

  return (
    <ContainerAnswers>
      <ButtonSyled onClick={() => dispatch({ type: "REINICIAR_JUEGO" })}>
        Reiniciar
      </ButtonSyled>

      <ContainerGame>
        {arrayGame.length > 0 &&
          arrayGame.map((letter) => {
            if (letter === null) {
              return <ButtonLetters key={uuidv4()}>{letter}</ButtonLetters>;
            } else {
              return (
                <ButtonLetters key={uuidv4()} style={{ color: "var(--color-pointer)" }}>
                  {letter}
                </ButtonLetters>
              );
            }
          })}
      </ContainerGame>
    </ContainerAnswers>
  );
};

export default HangmanAnswers;
