import "./BoardSudoku.css";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { makepuzzle, solvepuzzle, ratepuzzle } from "sudoku";

const BoardSudoku = () => {
  const [sudokuBoard, setSudokuBoard] = useState([]);

  useEffect(() => {
    const newBoard = makepuzzle();
    setSudokuBoard(newBoard);
  }, []);

  console.log(solvepuzzle(sudokuBoard))

  return (
    <>
      <div className="board-sudoku">
        {sudokuBoard.map((number) => {
          if (number === null) {
            return <input key={uuidv4()} type="text" maxLength="1" />;
          } else {
            return <button key={uuidv4()}>{number}</button>;
          }
        })}
      </div>
      <button onClick={() => solvepuzzle(sudokuBoard)}>Resolver?</button>
    </>
  );
};

export default BoardSudoku;
