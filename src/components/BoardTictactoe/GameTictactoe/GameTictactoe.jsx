import "./GameTictactoe.css";

import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { tictactoeContext } from "../../../context/tictactoeContext";
import {
  changedBoardTicTacToe,
  getArraySolutions,
} from "../../../utils/FunctionsTicTacToe";
import ContainerButtonsFinish from "../../ContainerButtons/ContainerButtonsFinish";
import { ButtonTicTacToe } from "../../UI/ButtonGames";
import ScoreTable from "../ScoreTable/ScoreTable";

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
                <h2>Es el turno de &quot;{turn}&quot;</h2>
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
        <ContainerButtonsFinish
          restart={() => {
            dispatch({ type: "REINICIAR_PARTIDA" });
            setBoardTicTacToe(originalBoardTicTacToe);
          }}
          exit={() => {
            dispatch({ type: "SALIR_JUEGO" });
            setBoardTicTacToe(originalBoardTicTacToe);
          }}
        />
      )}
    </>
  );
};

export default GameTictactoe;
