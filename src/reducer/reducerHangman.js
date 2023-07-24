import { letterAlphabet, wordsHangman } from "../functions/ArrayHangman";

const numberRandom = Math.random() * wordsHangman.length;
const positionArray = Math.floor(numberRandom);

const pruebaPalabra = wordsHangman[positionArray].split("");

export const INITIAL_STATE_HANGMAN = {
  initialGame: false,
  restart: false,
  chance: 10,
  wrongLetters: [],
  selectedWord: [...pruebaPalabra],
  arrayGame: [],
  selectedLetters: letterAlphabet,
};

export const reducerHangman = (state, action) => {
  switch (action.type) {
    case "INICIAR_JUEGO":
      return {
        ...state,
        initialGame: true,
      };
    case "REINICIAR_JUEGO":
      return {
        ...state,
        restart: !state.restart,
        chance: 10,
        wrongLetters: [],
      };
    case "SELECCIONAR_PALABRA":
      return {
        ...state,
        selectedLetters: letterAlphabet,
      };
    case "ARRAY_JUEGO":
      return {
        ...state,
        arrayGame: state.selectedWord.map(() => null),
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
      };
  }
};
