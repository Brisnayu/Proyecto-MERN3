import "./BoardSudoku.css";
import { useContext, useState } from "react";
import { ButtonBack, ButtonSyled } from "../UI/ButtonStyled";
import GameInit from "../GameInit/GameInit";
import ModalError from "./ModalError/ModalError";
import ArraySudoku from "./ArraySudoku/ArraySudoku";
import MessageAlert from "./MessageAlert/MessageAlert";
import { equality, readyComparation } from "../../utils/FunctionsSudoku";
import AlertSudoku from "./AlertSudoku/AlertSudoku";
import { sudokuContext } from "../../context/sudokuContext";
import ResolvedSudoku from "./ArraySudoku/ResolvedSudoku";

const BoardSudoku = () => {
  const {
    solution,
    comprobation,
    casillas,
    incomplete,
    dispatch,
    originalSudokuBoard,
  } = useContext(sudokuContext);

  //Array que se va creando al ir rellenando la info!
  const [resolutionSudoku, setResolutionSudoku] = useState([]);

  // Array que me dirá los valores iguales y los diferentes!
  //Mostrar solamente al final, cuando ya no se tenga de mostrar nada
  const [newArray, setNewArray] = useState([]);

  //Estados del modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {!solution && originalSudokuBoard.length === 0 ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled onClick={() => dispatch({ type: "INITIAL_VALUE" })}>
              Iniciar juego
            </ButtonSyled>
            <ButtonSyled onClick={() => handleOpen()}>¿Cómo jugar?</ButtonSyled>
          </div>
          <GameInit gifInit="https://i.pinimg.com/originals/b9/16/8c/b9168cbec1a6eb98c7faebee9f8d8891.gif" />
        </>
      ) : !comprobation ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled onClick={() => dispatch({ type: "INITIAL_VALUE" })}>
              Reiniciar
            </ButtonSyled>

            {!casillas ? (
              <ButtonSyled onClick={() => readyComparation(resolutionSudoku, dispatch)}>
                Comprobar
              </ButtonSyled>
            ) : (
              <ButtonSyled
                onClick={() => {
                  equality(originalSudokuBoard, resolutionSudoku, setNewArray, dispatch);
                  dispatch({ type: "ESTOY_LISTO" });
                }}
              >
                Estoy listo!
              </ButtonSyled>
            )}
          </div>

          {incomplete ? (
            <MessageAlert
              severity="warning"
              title="Información ☝🏽"
              text="Tienes casillas vacías en tu Sudoku —"
              info="Haz una rápida comprobación."
            />
          ) : (
            <MessageAlert
              severity="info"
              title="Haz completado el sudoku 😀"
              text="Ahora si puedes pulsar el botón de arriba que dice:"
              info="Estoy listo!"
            />
          )}

          <ArraySudoku
            resolutionSudoku={resolutionSudoku}
            setResolutionSudoku={setResolutionSudoku}
          />
        </>
      ) : (
        <div className="container-sudoku-solution">
          <AlertSudoku />
          <ButtonSyled onClick={() => dispatch({ type: "INITIAL_VALUE" })}>
            Reiniciar
          </ButtonSyled>
          <ResolvedSudoku newArray={newArray} />
        </div>
      )}

      {solution && (
        <div className="container-group-buttons">
          <ButtonSyled type="submit" onClick={() => dispatch({ type: "SOLUCION_VALUE" })}>
            Solución
          </ButtonSyled>
          <ButtonBack onClick={() => dispatch({ type: "SALIR_VALUE" })}>Salir</ButtonBack>
        </div>
      )}

      <ModalError open={open} handleClose={handleClose} />
    </>
  );
};

export default BoardSudoku;
