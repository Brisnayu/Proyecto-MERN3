import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonBack } from "../../UI/ButtonStyled";
import { styled } from "styled-components";
import AlertHangman from "../AlertHangman/AlertHangman";
import { hangmanContext } from "../../../context/hangmanContext";

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
  color: var(--color-error);
`;

const HangmanInit = () => {
  const { chance, wrongLetters, selectedWord, selectedLetters, arrayGame, dispatch } =
    useContext(hangmanContext);

  console.log(selectedWord);
  console.log("HangmanInit", selectedWord);

  const [letrasUsadas, setLetrasUsadas] = useState()

  // useEffect(() => {
  //   dispatch({ type: "ARRAY_JUEGO" });
  //   console.log("HOLA, ESTOY EN USEEFECT")
  // }, [selectedWord]);

  const handleButtonClick = (letra, index) => {
    // console.log(`Botón ${letra} clickeado`);

    const ArrayNew = [...wrongLetters, letra];
    const letterChange = [...selectedLetters];

    letterChange[index] = 2;

    dispatch({ type: "LETRAS_USADAS", letra, index });

    if (selectedWord.includes(letra)) {
      for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] === letra) {
          arrayGame[i] = letra;
        }
      }
    } else {
      dispatch({ type: "RESTAR_OPORTUNIDADES" });
    }
  };

  // console.log(wrongLetters)

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
                    handleButtonClick(letra, index);
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
        <AlertHangman />
      )}

      <ButtonBack onClick={() => dispatch({ type: "SALIR_JUEGO" })}>Salir</ButtonBack>
    </>
  );
};

export default HangmanInit;
