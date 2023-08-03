import { letterAlphabet } from "../functions/ArrayHangman";

const getWordGame = (valueGame) => {
  const numberRandom = Math.random() * valueGame.length;
  const positionArray = Math.floor(numberRandom);

  return valueGame[positionArray].split("");
};

const letrasCambiadas = (index, state) => {
  const letterChange = [...state.selectedLetters];
  letterChange[index] = 2;

  return letterChange;
};

export const INITIAL_STATE_HANGMAN = {
  initialGame: false,
  ready: false,
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
      };
    case "COMENZAR_JUEGO":
      return {
        ...state,
        selectedWord: getWordGame(action.arrayGameHangman),
      };
    case "ESTOY_LISTO":
      return {
        ...state,
        ready: true,
      };
    case "CREAR_ARRAY_GAME":
      return {
        ...state,
        arrayGame: state.selectedWord.map(() => null),
      };
    case "REINICIAR_JUEGO":
      return {
        ...state,
        selectedWord: getWordGame(action.arrayGameHangman),
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
      return {
        ...state,
        wrongLetters: [...state.wrongLetters, action.letra],
        selectedLetters: letrasCambiadas(action.index, state),
      };
    case "SALIR_JUEGO":
      return {
        ...state,
        ready: false,
        wrongLetters: [],
        chance: 10,
        selectedLetters: letterAlphabet,
      };
  }
};
