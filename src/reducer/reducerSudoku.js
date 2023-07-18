export const INITIAL_STATE = {
  solution: false,
  resolut: false,
  comprobation: false,
  win: false,
  casillas: false,
  incomplete: false,
  openAlert: false,
};

export const reducer = (state, action) => {
  if (action.type === "INITIAL_VALUE") {
    return {
      ...state,
      solution: true,
      resolut: false,
      openAlert: false,
      comprobation: false,
      casillas: false,
    };
  } else if (action.type === "ESTOY_LISTO") {
    return {
      ...state,
      comprobation: true,
      solution: false,
    };
  } else if (action.type === "SOLUCION_VALUE") {
    return {
        ...state,
        resolut: !state.resolut,
    }
  } else if (action.type === "SALIR_VALUE") {
    return {
        ...state,
        comprobation: false,
    }
  }
};
