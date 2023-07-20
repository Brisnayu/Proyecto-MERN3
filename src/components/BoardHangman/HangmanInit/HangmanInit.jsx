import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonBack } from "../../UI/ButtonStyled";
import { letterAlphabet } from "../../../functions/ArrayHangman";
import { styled } from "styled-components";

const AlphabetContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  width: auto;
  height: auto;
  margin-bottom: 1rem;

  > button {
    /* border: 1px solid yellow; */
    width: 50px;
    height: 50px;
    font-size: 2rem;
    border-radius: 15px;
    font-weight: bold;
    color: var(--color-background);
  }
`;

const ContainerWrong = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  gap: 0.5rem;
  text-decoration: line-through;
  font-size: 2rem;
  color: var(--color-secondary);
`;

const HangmanInit = ({
  setInitialGame,
  chance,
  setChance,
  wrongLetters,
  setWrongLetters,
  selectedWord
}) => {
  const handleButtonClick = (letra, index) => {
    // console.log(`Botón ${letra} clickeado`);
    const ArrayNew = [...wrongLetters, letra];

    const otherLetter = [...otherLetters];

    otherLetter[index] = 2;

    setOtherLetters(otherLetter);

    setWrongLetters(ArrayNew);
    
    if (selectedWord.includes(letra)) {
        console.log("SI LO INCLUYE")
    }
  };

  const [otherLetters, setOtherLetters] = useState(letterAlphabet);

console.log(selectedWord);

  return (
    <>
      <h2>Te quedan {chance} intentos</h2>

      <ContainerWrong>
        {wrongLetters.length > 0 &&
          wrongLetters.map((letter) => <h3 key={uuidv4()}>{letter}</h3>)}
      </ContainerWrong>

      <AlphabetContainer>
        {otherLetters.map((letra, index) => {
          if (typeof letra === "string") {
            return (
              <button
                key={uuidv4()}
                onClick={() => {
                  handleButtonClick(letra, index), setChance(chance - 1);
                }}
              >
                {letra}
              </button>
            );
          } else {
            return (
              <button className="prueba" key={uuidv4()}>
                {letra}
              </button>
            );
          }
        })}
      </AlphabetContainer>

      <ButtonBack onClick={() => setInitialGame(false)}>Salir</ButtonBack>
    </>
  );
};

export default HangmanInit;
