import "./StylesArraysSudoku.css";
import { useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { sudokuContext } from "../../../context/sudokuContext";
import { solvepuzzle } from "sudoku";

const ArraySudoku = ({
  resolutionSudoku,
  setResolutionSudoku,
}) => {

  const { resolut, originalSudokuBoard } = useContext(sudokuContext);

  useEffect(() => {
    setResolutionSudoku(originalSudokuBoard);
  }, [originalSudokuBoard])

  const getInputValue = (event) => {
    const arrayValue = [...resolutionSudoku];

    const inputIndex = event.target.id;
    const inputValue = event.target.value === "" ? null : Number(event.target.value - 1);

    arrayValue[inputIndex] = inputValue;

    setResolutionSudoku(arrayValue);
  };

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
                onChange={(ev) => getInputValue(ev)}
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
