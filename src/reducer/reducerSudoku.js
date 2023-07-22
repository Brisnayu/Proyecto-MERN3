import { makepuzzle } from "sudoku";

export const INITIAL_STATE = {
  solution: false,
  resolut: false,
  comprobation: false,
  casillas: false,
  incomplete: false,
  openAlert: false,
  originalSudokuBoard: [],
  win: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL_VALUE":
      return {
        ...state,
        solution: true,
        resolut: false,
        openAlert: false,
        comprobation: false,
        casillas: false,
        originalSudokuBoard: makepuzzle(),
        win: false,
      };
    case "ESTOY_LISTO":
      return {
        ...state,
        comprobation: true,
        solution: false,
      };
    case "SOLUCION_VALUE":
      return {
        ...state,
        resolut: !state.resolut,
      };
    case "SALIR_VALUE":
      return {
        ...state,
        comprobation: false,
        solution: false,
        originalSudokuBoard: [],
      };
    case "COMPROBAR_VALUE":
      return {
        ...state,
        openAlert: true,
      };
    case "HAY_CASILLAS_LIBRES":
      return {
        ...state,
        casillas: false,
        incomplete: true,
        openAlert: true,
      };
    case "NO_HAY_CASILLAS_LIBRES":
      return {
        ...state,
        casillas: true,
        incomplete: false,
        openAlert: true,
      };
    case "CERRAR_ALERT":
      return {
        ...state,
        openAlert: false,
      };
    case "GANAR":
      return {
        ...state,
        win: true,
      };
  }
};


    // for (let i = 0; i < selectedWord.length; i++) {
    //   if (selectedWord[i] === letra) {
    //     if (arrayOk[i] === null) {
    //       console.log("hay un igual a null, SE PONE LA LETRA")
    //       console.log("cuando vale arrayOk", arrayOk[i])
    //       console.log("cual es la posisicion i", i)
    //       arrayOk[i] = letra;
    //     } else {
    //       console.log("no hay un igual a null SE PONE LA LETRA")
    //       UnNuevoArray.push(letra);
    //     }
    //   } else {
    //     console.log("SE PONE UN NULL")
    //     UnNuevoArray.push(null);
    //   }
    // }