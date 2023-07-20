import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { wordsHangman } from "../../../functions/ArrayHangman";
import { styled } from "styled-components";
import { ButtonSyled } from "../../UI/ButtonStyled";

const ButtonLetters = styled.button`
  /* border: 1px solid red; */
  width: 90px;
  height: 90px;
  margin: 5px;
  font-size: 3rem;
  font-family: var(--font-title);
  background: transparent;
  color: transparent;
  border: 0;
  border-bottom: 3px solid var(--color-contrast);
`;

const ContainerAnswers = styled.div`
  /* border: 1px solid red; */
  display: flex;  
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const HangmanAnswers = ({ selectedWord, setSelectedWord, setChance, setWrongLetters }) => {
  const numberRandom = Math.random() * wordsHangman.length;
  const positionArray = Math.floor(numberRandom);
  // console.log(wordsHangman[1])

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setSelectedWord(wordsHangman[positionArray].split(""));
  }, [restart]);

  return (
    <ContainerAnswers>
      <ButtonSyled onClick={() => {setRestart(!restart), setChance(10), setWrongLetters([])}}>Reiniciar</ButtonSyled>
      <div>
        {selectedWord.map((word) => (
          <ButtonLetters id={word} className="wordGame" key={uuidv4()}>
            {word}
          </ButtonLetters>
        ))}
      </div>
    </ContainerAnswers>
  );
};

export default HangmanAnswers;
