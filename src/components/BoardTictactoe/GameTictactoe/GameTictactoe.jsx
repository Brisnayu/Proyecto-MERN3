import "./GameTictactoe.css";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { tictactoeContext } from "../../../context/tictactoeContext";
import {
  changedBoardTicTacToe,
  getArraySolutions,
} from "../../../utils/FunctionsTicTacToe";
import ScoreTable from "../ScoreTable/ScoreTable";
import { ButtonBack, ButtonSyled, ButtonTicTacToe } from "../../UI/ButtonStyled";

const GameTictactoe = ({ boardTicTacToe, setBoardTicTacToe, originalBoardTicTacToe }) => {
  const { winnerX, winnerO, tied, turn, dispatch } = useContext(tictactoeContext);

  return (
    <>
      <section className="container-board">
        {turn === "" ? (
          <div className="selected-token">
            Selecciona con tu ficha:
            <div>
              <button onClick={() => dispatch({ type: "SELECCIONAR_FICHA_X" })}>X</button>
              <button onClick={() => dispatch({ type: "SELECCIONAR_FICHA_O" })}>O</button>
            </div>
          </div>
        ) : (
          <>
            <article className="container-game-score">
              <div></div>
              <div className="container-score-turn">
                <h2>Es el turno de "{turn}"</h2>
                <div>
                  <ScoreTable winnerO={winnerO} winnerX={winnerX} tied={tied} />
                </div>
              </div>
            </article>
          </>
        )}

        <div className={`container-game ${turn === "" && "disable"}`}>
          {boardTicTacToe.map((row, indexRow) =>
            row.map((column, indexColumn) => (
              <ButtonTicTacToe
                key={uuidv4()}
                onClick={() => {
                  changedBoardTicTacToe(
                    boardTicTacToe,
                    turn,
                    setBoardTicTacToe,
                    indexColumn,
                    indexRow,
                    dispatch,
                  );
                  getArraySolutions(boardTicTacToe, turn, dispatch);
                }}
              >
                {column}
              </ButtonTicTacToe>
            )),
          )}
        </div>
      </section>

      {turn !== "" && (
        <div className="buttons-games">
          <ButtonSyled
            style={{ color: "black" }}
            onClick={() => {
              dispatch({ type: "REINICIAR_PARTIDA" });
              setBoardTicTacToe(originalBoardTicTacToe);
            }}
          >
            Reiniciar
          </ButtonSyled>
          <ButtonBack
            onClick={() => {
              dispatch({ type: "SALIR_JUEGO" });
              setBoardTicTacToe(originalBoardTicTacToe);
            }}
          >
            Salir
          </ButtonBack>
        </div>
      )}
    </>
  );
};

export default GameTictactoe;
