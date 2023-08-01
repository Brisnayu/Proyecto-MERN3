import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { styled } from "styled-components";
import { hangmanContext } from "../../../context/hangmanContext";
import { ButtonHangman } from "../../UI/ButtonGames";

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
            return <ButtonHangman key={uuidv4()}>{letter}</ButtonHangman>;
          } else {
            return (
              <ButtonHangman key={uuidv4()} style={{ color: "var(--color-pointer)" }}>
                {letter}
              </ButtonHangman>
            );
          }
        })}
    </ContainerAnswers>
  );
};

export default HangmanAnswers;
