import "./StylesArraysSudoku.css";

import { getInputValue } from "../../../utils/FunctionsSudoku";
import { solvepuzzle } from "sudoku";
import { sudokuContext } from "../../../context/sudokuContext";
import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ArraySudoku = ({ resolutionSudoku, setResolutionSudoku }) => {
  const { resolut, originalSudokuBoard } = useContext(sudokuContext);

  useEffect(() => {
    setResolutionSudoku(originalSudokuBoard);
  }, [originalSudokuBoard]);

  return (
    <section className="container-sudoku">
      <article className="board-sudoku">
        {originalSudokuBoard.map((number, index) => {
          if (number === null) {
            return (
              <input
                key={index}
                type="number"
                max={9}
                min={1}
                id={index}
                className={"casilla" + index}
                onChange={(event) =>
                  getInputValue(event, resolutionSudoku, setResolutionSudoku)
                }
              />
            );
          } else {
            return (
              <button
                key={uuidv4()}
                style={{
                  backgroundColor: "var(--color-background)",
                  color: "var(--color-contrast)",
                  fontWeight: "bold",
                }}
                id={index}
                className={"casilla" + index}
              >
                {number + 1}
              </button>
            );
          }
        })}
      </article>

      <article className={`board-sudoku-solve ${resolut && "visible"}`}>
        {solvepuzzle(originalSudokuBoard).map((number) => (
          <button key={uuidv4()}>{number + 1}</button>
        ))}
      </article>
    </section>
  );
};

export default ArraySudoku;
