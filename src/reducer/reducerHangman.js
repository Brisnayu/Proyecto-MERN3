import { letterAlphabet, wordsHangman } from "../functions/ArrayHangman";

const getWordGame = () => {
  const numberRandom = Math.random() * wordsHangman.length;
  const positionArray = Math.floor(numberRandom);

  return wordsHangman[positionArray].split("");
};

export const INITIAL_STATE_HANGMAN = {
  initialGame: false,
  chance: 10,
  wrongLetters: [],
  selectedWord: [],
  arrayGame: [],
  selectedLetters: letterAlphabet,
};

export const reducerHangman = (state, action) => {
  switch (action.type) {
    case "INICIAR_JUEGO":
      return {
        ...state,
        initialGame: true,
        selectedWord: getWordGame(),
      };

    case "CREAR_ARRAY_GAME":
      return {
        ...state,
        arrayGame: state.selectedWord.map(() => null),
      };
    case "REINICIAR_JUEGO":
      return {
        ...state,
        selectedWord: getWordGame(),
        chance: 10,
        wrongLetters: [],
        selectedLetters: letterAlphabet,
      };
    case "SELECCIONAR_PALABRA":
      return {
        ...state,
        selectedLetters: letterAlphabet,
      };
    case "RESTAR_OPORTUNIDADES":
      return {
        ...state,
        chance: state.chance - 1,
      };
    case "LETRAS_USADAS":
      const letrasCambiadas = (index) => {
        const letterChange = [...state.selectedLetters];
        letterChange[index] = 2;

        return letterChange;
      };

      return {
        ...state,
        wrongLetters: [...state.wrongLetters, action.letra],
        selectedLetters: letrasCambiadas(action.index),
      };
    case "SALIR_JUEGO":
      return {
        ...state,
        initialGame: false,
        wrongLetters: [],
        chance: 10,
        selectedLetters: letterAlphabet,
      };
  }
};
