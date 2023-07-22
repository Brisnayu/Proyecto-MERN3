import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonBack } from "../../UI/ButtonStyled";
import { styled } from "styled-components";
import { ButtonLetters } from "../HangmanAnswers/HangmanAnswers";

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
  selectedWord,
  selectedLetters,
  setSelectedLetters,
  arrayGame,
  setArrayGame,
}) => {
  useEffect(() => {
    const getArrayGame = [];

    for (let i = 0; i < selectedWord.length; i++) {
      getArrayGame.push(null);
    }

    setArrayGame(getArrayGame);
  }, [selectedWord]);

  const handleButtonClick = (letra, index) => {
    // console.log(`Botón ${letra} clickeado`);
    const ArrayNew = [...wrongLetters, letra];
    const letterChange = [...selectedLetters];

    letterChange[index] = 2;

    setSelectedLetters(letterChange);

    setWrongLetters(ArrayNew);

    if (selectedWord.includes(letra)) {
      for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letra) {
          arrayGame[i] = letra;
        }
      }

      setChance(chance);
    } else {
      setChance(chance - 1);
    }
  };

  // console.log(wrongLetters)

  return (
    <>
      <h2>Te quedan {chance} intentos</h2>

      <ContainerWrong>
        {wrongLetters.length > 0 &&
          wrongLetters.map((letter) => <h3 key={uuidv4()}>{letter}</h3>)}
      </ContainerWrong>

      {chance > 0 && arrayGame.includes(null) ? (
        <AlphabetContainer>
          {selectedLetters.map((letra, index) => {
            if (typeof letra === "string") {
              return (
                <button
                  key={uuidv4()}
                  onClick={() => {
                    handleButtonClick(letra, index);
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
      ) : (
        <>
          {chance < 0 && (
            <>
              <h3>
                ¡Lo siento, has sido derrotado! ¿Te animas a intentarlo de nuevo? 🤔
              </h3>
              <h3>La palabra secreta es: {selectedWord.join("")}</h3>
            </>
          )}
        </>
      )}

      {!arrayGame.includes(null) && (
        <>
          <h1>
            "¡Felicidades! Has adivinado la palabra correctamente. Eres un campeón del
            ahorcado. ¡Bien hecho!"
          </h1>
        </>
      )}

      <ButtonBack
        onClick={() => {
          setInitialGame(false), setWrongLetters([]), setChance(10);
        }}
      >
        Salir
      </ButtonBack>
    </>
  );
};

export default HangmanInit;
