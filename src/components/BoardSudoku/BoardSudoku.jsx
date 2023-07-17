import "./BoardSudoku.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import { ButtonBack, ButtonSyled } from "../UI/ButtonStyled";
import SudokuInit from "./SudokuInit/SudokuInit";
import ModalError from "./ModalError/ModalError";
import ArraySudoku from "./ArraySudoku/ArraySudoku";
import ResolutSudoku from "./ArraySudoku/ResolutSudoku";
import { Alert, AlertTitle, Box, Collapse } from "@mui/material";

const BoardSudoku = () => {
  const [solution, setSoluction] = useState(false);
  const [resolut, setResolut] = useState(false);
  const [comprobation, setComprobation] = useState(false);
  const [win, setWin] = useState(false);
  const [casillas, setCasillas] = useState(false);
  const [incomplete, setIncomplete] = useState();
  const [showSolution, setShowSolution] = useState("");

  // console.log("solution", solution);
  // console.log("resolut", resolut);
  // console.log("comprobation", comprobation);

  //Array que se tiene que resolver
  const [originalSudokuBoard, setOriginalSudokuBoard] = useState([]);

  //Array que se va creando al ir rellenando la info!
  const [resolutionSudoku, setResolutionSudoku] = useState([]);

  // Array que me dirá los valores iguales y los diferentes!
  //Mostrar solamente al final, cuando ya no se tenga de mostrar nada
  const [newArray, setNewArray] = useState([]);

  // Estados error
  const [open1, setOpen1] = useState(false);

  //Estados del modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const InitialGame = () => {
    const newBoard = makepuzzle();
    setOriginalSudokuBoard(newBoard);
    setResolutionSudoku(newBoard);
  };

  const handleShowSolution = () => {
    if (resolut === true) {
      setShowSolution("");
    } else {
      setShowSolution("visible");
    }
  };

  const readyComparation = () => {
    const found = resolutionSudoku.find((valor) => valor === null);

    console.log(resolutionSudoku);

    if (found === null) {
      console.log("El sudoku tiene casillas sin rellenar");
      setCasillas(false);

      setIncomplete(true);
      setOpen1(true);
    } else {
      console.log("el sudoku está listo para verificar");
      setCasillas(true);
      setIncomplete(false);
      setOpen1(true);
    }
  };

  //comparación de los dos arrays
  const equality = () => {
    const arrayEquality = [];

    for (let i = 0; i < solvepuzzle(originalSudokuBoard).length; i++) {
      if (solvepuzzle(originalSudokuBoard)[i] === resolutionSudoku[i]) {
        arrayEquality.push(solvepuzzle(originalSudokuBoard)[i] + 1);
      } else {
        arrayEquality.push((solvepuzzle(originalSudokuBoard)[i] + 1).toString());
      }
    }

    const result =
      JSON.stringify(solvepuzzle(originalSudokuBoard)) ===
      JSON.stringify(resolutionSudoku);

    setWin(result);

    setNewArray(arrayEquality);
  };

  // console.log(win);

  console.log("me estoy reenderizando");

  return (
    <>
      {!solution && originalSudokuBoard.length === 0 ? (
        <>
          <div>
            <ButtonSyled
              onClick={() => {
                setSoluction(true), InitialGame();
              }}
            >
              Iniciar juego!
            </ButtonSyled>
            <ButtonSyled onClick={() => handleOpen()}>¿Cómo jugar?</ButtonSyled>
          </div>
          <SudokuInit />
        </>
      ) : !comprobation ? (
        <>
          <div>
            <ButtonSyled
              onClick={() => {
                InitialGame();
                setShowSolution("");
                setResolut(false);
                setOpen1(false);
              }}
            >
              Reiniciar
            </ButtonSyled>
            {!casillas ? (
              <ButtonSyled onClick={() => {readyComparation(), setOpen1(!open1)}}>Comprobar</ButtonSyled>
            ) : (
              <ButtonSyled
                onClick={() => {
                  setComprobation(true), equality(), setSoluction(false);
                }}
              >
                Estoy listo!
              </ButtonSyled>
            )}
          </div>

          {/* {incomplete === true ? (
            <Alert severity="info">
              <AlertTitle>Información ☝🏽</AlertTitle>
              Tienes casillas vacías en tu Sudoku —{" "}
              <strong>Haz una rápida comprobación.</strong>
            </Alert>
          ) : null} */}

          {incomplete ? (
            <Box sx={{ width: "50%" }}>
              <Collapse in={open1}>
                <Alert
                  severity="warning"
                  action={
                    <div
                      onClick={() => {
                        setOpen1(false);
                      }}
                    >
                      <button className="button-close" fontSize="inherit">
                        X
                      </button>
                    </div>
                  }
                >
                  <AlertTitle>Información ☝🏽</AlertTitle>
                  Tienes casillas vacías en tu Sudoku —{" "}
                  <strong>Haz una rápida comprobación.</strong>
                </Alert>
              </Collapse>
            </Box>
          ) : (
            <Box sx={{ width: "50%" }}>
              <Collapse in={open1}>
                <Alert
                  severity="info"
                  action={
                    <div
                      onClick={() => {
                        setOpen1(false);
                      }}
                    >
                      <button className="button-close" fontSize="inherit">
                        X
                      </button>
                    </div>
                  }
                >
                  <AlertTitle>Haz completado el sudoku 😀</AlertTitle>
                  Ahora si puedes pulsar el botón de arriba que dice{" "}
                  <strong>Estoy listo!</strong>
                </Alert>
              </Collapse>
            </Box>
          )}

          <ArraySudoku
            sudokuArray={originalSudokuBoard}
            resolvedArray={solvepuzzle(originalSudokuBoard)}
            showSolution={showSolution}
            resolutionSudoku={resolutionSudoku}
            setResolutionSudoku={setResolutionSudoku}
          />
        </>
      ) : win === true ? (
        <h1>VICTORIA! 😀</h1>
      ) : (
        <h2>Lo siento, no es correcto 🥹 </h2>
      )}

      {solution && (
        <div className="container-buttons">
          <ButtonSyled
            type="submit"
            onClick={() => {
              handleShowSolution();
              setResolut(!resolut);
            }}
          >
            Solución
          </ButtonSyled>
        </div>
      )}

      {comprobation && (
        <>
          <ButtonSyled
            onClick={() => {
              setSoluction(true), InitialGame(), setComprobation(false);
              setCasillas(false); setOpen1(false);
            }}
          >
            Reiniciar
          </ButtonSyled>
          <ResolutSudoku newArray={newArray} />
        </>
      )}

      <ButtonBack
        onClick={() => {
          setSoluction(false), setOriginalSudokuBoard([]), setComprobation(false);
          setShowSolution("");
        }}
      >
        Salir
      </ButtonBack>

      <ModalError open={open} handleClose={handleClose} />
    </>
  );
};

export default BoardSudoku;
