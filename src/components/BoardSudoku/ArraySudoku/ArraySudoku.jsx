import { v4 as uuidv4 } from "uuid";

const ArraySudoku = ({
  sudokuArray,
  resolvedArray,
  showSolution,
  resolutionSudoku,
  setResolutionSudoku,
}) => {
  const getInputValue = (event) => {
    const arrayValue = [...resolutionSudoku];

    const inputIndex = event.target.id;
    const inputValue = event.target.value === "" ? null : Number(event.target.value - 1);

    arrayValue[inputIndex] = inputValue;

    // console.log("estoy aquí");

    setResolutionSudoku(arrayValue);
  };

  return (
    <section className="container-sudoku">
      <article className="board-sudoku">
        {sudokuArray.map((number, index) => {
          if (number === null) {
            return (
              <input
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

      <article className={`board-sudoku-solve ${showSolution}`}>
        {resolvedArray.map((number) => (
          <button key={uuidv4()}>{number + 1}</button>
        ))}
      </article>
    </section>
  );
};

export default ArraySudoku;
