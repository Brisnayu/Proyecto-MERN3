import "./StylesArraysSudoku.css";
import { v4 as uuidv4 } from "uuid";

const ResolvedSudoku = ({ newArray }) => {
  return (
    <div className="board-sudoku" style={{ marginBottom: "2rem" }}>
      {newArray.map((number, index) => {
        if (typeof number === "string") {
          return (
            <button
              key={uuidv4()}
              className={"casilla" + index}
              id={index}
              style={{ color: "red" }}
            >
              {number}
            </button>
          );
        } else {
          return (
            <button key={uuidv4()} className={"casilla" + index}>
              {number}
            </button>
          );
        }
      })}
    </div>
  );
};

export default ResolvedSudoku;
