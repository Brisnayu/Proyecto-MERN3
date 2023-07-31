import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { styled } from "styled-components";
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

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
  }
`;

const ContainerAnswers = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-title);
`;

const HangmanAnswers = () => {
  const { arrayGame } = useContext(hangmanContext);

  return (
    <ContainerAnswers>
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
    </ContainerAnswers>
  );
};

export default HangmanAnswers;
