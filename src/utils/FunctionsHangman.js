export const handleButtonLetter = (dispatch, selectedWord, arrayGame, letra, index) => {
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
