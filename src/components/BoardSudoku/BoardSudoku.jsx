import "./BoardSudoku.css";
import { useState } from "react";
import { solvepuzzle } from "sudoku";
import { ButtonBack, ButtonSyled } from "../UI/ButtonStyled";
import SudokuInit from "./SudokuInit/SudokuInit";
import ModalError from "./ModalError/ModalError";
import ArraySudoku from "./ArraySudoku/ArraySudoku";
import ResolutSudoku from "./ArraySudoku/ResolutSudoku";
import MessageAlert from "./MessageAlert/MessageAlert";
import {
  InitialGame,
  equality,
  handleShowSolution,
  readyComparation,
} from "../../utils/FunctionsSudoku";
import AlertSudoku from "./AlertSudoku/AlertSudoku";

const BoardSudoku = () => {
  
  const [solution, setSoluction] = useState(false);
  const [resolut, setResolut] = useState(false);
  const [comprobation, setComprobation] = useState(false);
  const [win, setWin] = useState(false);
  const [casillas, setCasillas] = useState(false);
  const [incomplete, setIncomplete] = useState(false);

  //Estado para mostrar la solución, cambia la clase
  const [showSolution, setShowSolution] = useState("");

  //Array que se tiene que resolver
  const [originalSudokuBoard, setOriginalSudokuBoard] = useState([]);

  //Array que se va creando al ir rellenando la info!
  const [resolutionSudoku, setResolutionSudoku] = useState([]);

  // Array que me dirá los valores iguales y los diferentes!
  //Mostrar solamente al final, cuando ya no se tenga de mostrar nada
  const [newArray, setNewArray] = useState([]);

  // Estado error
  const [openAlert, setOpenAlert] = useState(false);

  //Estados del modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleValueInitial = () => {
    setSoluction(true);
    InitialGame(setOriginalSudokuBoard, setResolutionSudoku);
    setShowSolution("");
    setResolut(false);
    setOpenAlert(false);
    setComprobation(false);
    setCasillas(false);
  }

  const handleComprobar = () => {
    readyComparation(resolutionSudoku, setCasillas, setIncomplete, setOpenAlert);
  };

  const handleEstoyListo = () => {
    setComprobation(true);
    equality(originalSudokuBoard, resolutionSudoku, setWin, setNewArray);
    setSoluction(false);
  };

  const handleSolucion = () => {
    handleShowSolution(resolut, setShowSolution);
    setResolut(!resolut);
  };

  const handleSalir = () => {
    setSoluction(false);
    setOriginalSudokuBoard([]);
    setComprobation(false);
    setShowSolution("");
  };

  return (
    <>
      {!solution && originalSudokuBoard.length === 0 ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled onClick={() => handleValueInitial()}>Iniciar juego</ButtonSyled>
            <ButtonSyled onClick={() => handleOpen()}>¿Cómo jugar?</ButtonSyled>
          </div>
          <SudokuInit />
        </>
      ) : !comprobation ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled onClick={() => handleValueInitial()}>Reiniciar</ButtonSyled>
            
            {!casillas ? (
              <ButtonSyled onClick={() => handleComprobar()}>Comprobar</ButtonSyled>
            ) : (
              <ButtonSyled onClick={() => handleEstoyListo()}>Estoy listo!</ButtonSyled>
            )}
          </div>

          {incomplete ? (
            <MessageAlert
              openAlert={openAlert}
              setOpenAlert={setOpenAlert}
              severity="warning"
              title="Información ☝🏽"
              text="Tienes casillas vacías en tu Sudoku —"
              info="Haz una rápida comprobación."
            />
          ) : (
            <MessageAlert
              openAlert={openAlert}
              setOpenAlert={setOpenAlert}
              severity="info"
              title="Haz completado el sudoku 😀"
              text="Ahora si puedes pulsar el botón de arriba que dice:"
              info="Estoy listo!"
            />
          )}

          <ArraySudoku
            sudokuArray={originalSudokuBoard}
            resolvedArray={solvepuzzle(originalSudokuBoard)}
            showSolution={showSolution}
            resolutionSudoku={resolutionSudoku}
            setResolutionSudoku={setResolutionSudoku}
          />
        </>
      ) : (
        <div className="container-sudoku-solution">
          <AlertSudoku win={win} />
          <ButtonSyled onClick={() => handleValueInitial()}>Reiniciar</ButtonSyled>
          <ResolutSudoku newArray={newArray} />
        </div>
      )}

      {solution && (
        <div className="container-group-buttons">
          <ButtonSyled type="submit" onClick={() => handleSolucion()}>
            Solución
          </ButtonSyled>
          <ButtonBack onClick={() => handleSalir()}>Salir</ButtonBack>
        </div>
      )}

      <ModalError open={open} handleClose={handleClose} />
    </>
  );
};

export default BoardSudoku;
