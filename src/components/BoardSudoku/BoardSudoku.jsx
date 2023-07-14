import "./BoardSudoku.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";
import { ButtonBack, ButtonSyled } from "../UI/ButtonStyled";
import SudokuInit from "./SudokuInit/SudokuInit";
import ModalError from "./ModalError/ModalError";

const BoardSudoku = () => {
  const [sudokuBoard, setSudokuBoard] = useState([]);
  const [solution, setSoluction] = useState(false);
  const [resolut, setResolut] = useState(false);
  const [showSolution, setShowSolution] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // setSoluction(true);
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
  }, []);

  const handleShowSolution = () => {
    if (resolut === true) {
      setShowSolution("");
    } else {
      setShowSolution("visible");
    }
  };

  return (
    <>
      {!solution && (
        <div>
          <ButtonSyled style={{ margin: "2rem" }} onClick={() => setSoluction(true)}>
            Iniciar juego!
          </ButtonSyled>
          <ButtonSyled onClick={() => handleOpen()}>¿Cómo jugar?</ButtonSyled>
        </div>
      )}

      {solution ? (
        <section className="container-sudoku">
          <article className="board-sudoku">
            {sudokuBoard.map((number, index) => {
              if (number === null) {
                return (
                  <input
                    key={uuidv4()}
                    type="number"
                    max={9}
                    min={1}
                    className={"casilla" + index}
                  />
                );
              } else {
                return (
                  <button key={uuidv4()} className={"casilla" + index}>
                    {number}
                  </button>
                );
              }
            })}
          </article>

          <article className={`board-sudoku-solve ${showSolution}`}>
            {solvepuzzle(sudokuBoard).map((number) => (
              <button key={uuidv4()}>{number}</button>
            ))}
          </article>
        </section>
      ) : (
        <SudokuInit />
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
          <ButtonSyled
            onClick={() => {
              setSudokuBoard(makepuzzle());
              setShowSolution("");
            }}
          >
            Reiniciar
          </ButtonSyled>
          <ButtonBack onClick={() => setSoluction(false)}>Salir</ButtonBack>
        </div>
      )}

      <ModalError open={open} handleClose={handleClose} />
    </>
  );
};

export default BoardSudoku;
