import { useContext } from "react";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { hangmanContext } from "../../../context/hangmanContext";
import { ButtonHangman } from "../../UI/ButtonGames";

const ContainerAnswers = styled.div`
  display: flex;
  align-items: center;
  font-family: var(--font-title);
`;

const HangmanAnswers = () => {
  const { arrayGame, selectedWord, chance } = useContext(hangmanContext);

  return (
    <ContainerAnswers>
      {chance > 0 ? (
        <>
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
        </>
      ) : (
        <>
          {selectedWord.length > 0 &&
            selectedWord.map((letter) => {
              return (
                <ButtonHangman key={uuidv4()} style={{ color: "var(--color-pointer)" }}>
                  {letter}
                </ButtonHangman>
              );
            })}
        </>
      )}
    </ContainerAnswers>
  );
};

export default HangmanAnswers;
