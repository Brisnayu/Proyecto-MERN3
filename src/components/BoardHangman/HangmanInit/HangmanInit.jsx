import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonBack } from "../../UI/ButtonStyled";
import { styled } from "styled-components";
import { hangmanContext } from "../../../context/hangmanContext";
import { handleButtonLetter } from "../../../utils/FunctionsHangman";
import FinishGame from "../FinishGame/FinishGame";

const AlphabetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  width: auto;
  height: auto;
  margin-bottom: 1rem;

  > button {
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
  color: var(--color-error);
`;

const HangmanInit = () => {
  const { chance, wrongLetters, selectedWord, selectedLetters, arrayGame, dispatch } =
    useContext(hangmanContext);

  return (
    <>
      <h2>Te quedan {chance} intentos</h2>

      <ContainerWrong>
        {wrongLetters?.length > 0 &&
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
                    handleButtonLetter(dispatch, selectedWord, arrayGame, letra, index);
                  }}
                >
                  {letra}
                </button>
              );
            } else {
              return (
                <button className="button-selected" key={uuidv4()}>
                  {letra}
                </button>
              );
            }
          })}
        </AlphabetContainer>
      ) : (
        <FinishGame />
      )}

      <ButtonBack onClick={() => dispatch({ type: "SALIR_JUEGO" })}>Salir</ButtonBack>
    </>
  );
};

export default HangmanInit;
