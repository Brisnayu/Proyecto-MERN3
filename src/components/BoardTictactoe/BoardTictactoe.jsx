import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonBack, ButtonSyled, ButtonTicTacToe } from "../UI/ButtonStyled";
import "./BoardTictactoe.css";
import GameInit from "../GameInit/GameInit";
import ModalInformation from "../ModalInformation/ModalInformation";
import { RulesPlayTicTacToe } from "../../functions/RulesGames";
import ScoreTable from "./ScoreTable/ScoreTable";
import ModalResult from "./ModalResult/ModalResult";
import { changedBoardTicTacToe, getArraysSolutions } from "../../utils/FunctionsTicTacToe";

const BoardTictactoe = () => {
  const originalBoardTicTacToe = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [starGame, setStarGame] = useState(false);

  const [turnos, setTurnos] = useState(1);

  const [winnerPosition, setWinnerPosition] = useState("");
  const [winnerX, setWinnerX] = useState(0);
  const [winnerO, setWinnerO] = useState(0);
  const [tied, setTied] = useState(0);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open1, setOpen1] = useState(false);
  const handleClose1 = () => setOpen1(false);

  const [open2, setOpen2] = useState(false);
  const handleClose2 = () => setOpen2(false);

  const [turn, setTurn] = useState("");

  const [winner, setWinner] = useState(false);

  const [boardTicTacToe, setBoardTicTacToe] = useState(originalBoardTicTacToe);

  const resetGame = () => {
    setBoardTicTacToe(originalBoardTicTacToe);
    setWinner(false);
    setTurnos(1);
  };

  return (
    <>
      {!starGame ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled onClick={() => setStarGame(true)}>Iniciar juego</ButtonSyled>
            <ButtonSyled onClick={() => handleOpen()}>¿Cómo jugar?</ButtonSyled>
          </div>

          <GameInit imgInit="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1690376140/Proyecto6%2C%20Hub%20de%20Juegos/two-people_ooxblq.png" />

          <ModalInformation
            open={open}
            handleClose={handleClose}
            nameGame={"Tres en Raya"}
            rules={RulesPlayTicTacToe}
          />
        </>
      ) : (
        <article className="card-board">
          <ButtonSyled
            onClick={() => {
              setTurn(""), setBoardTicTacToe(originalBoardTicTacToe), setWinner(false);
              setTurnos(1), setWinnerO(0), setWinnerX(0), setTied(0);
            }}
          >
            Reiniciar
          </ButtonSyled>

          {!winner ? (
            <ModalResult
              open={open2}
              result="¡Ha sido empate! 🤨"
              text="¿Jugamos la revancha?"
              funcionality={resetGame}
              handleCloseResult={handleClose2}
            />
          ) : (
            <ModalResult
              open={open1}
              result="¡Felicidades! 🥳🎉"
              text={`El ganador es "${turn === "X" ? "O" : "X"}"`}
              position={`Haz ganado en dirección ${winnerPosition}`}
              funcionality={resetGame}
              handleCloseResult={handleClose1}
            />
          )}

          <section className="container-board">
            {turn === "" ? (
              <div className="selected-token">
                Selecciona con tu ficha:
                <div>
                  <button onClick={() => setTurn("X")}>X</button>
                  <button onClick={() => setTurn("O")}>O</button>
                </div>
              </div>
            ) : (
              <article className="container-game-score">
                <div className="container-score-turn">
                  <h2>Es el turno de "{turn}"</h2>
                  <div>
                    <ScoreTable winnerO={winnerO} winnerX={winnerX} tied={tied} />
                  </div>
                </div>
              </article>
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
                        setTurn,
                        turnos,
                        setTurnos,
                        setBoardTicTacToe,
                        indexRow,
                        indexColumn,
                      );
                      getArraysSolutions(
                        boardTicTacToe,
                        turnos,
                        turn,
                        setOpen1,
                        setOpen2,
                        setTied,
                        setWinnerPosition,
                        setWinner,
                        setWinnerO,
                        setWinnerX,
                        winnerX,
                        winnerO,
                        tied,
                      );
                    }}
                  >
                    {column}
                  </ButtonTicTacToe>
                )),
              )}
            </div>
          </section>

          <ButtonBack
            onClick={() => {
              setStarGame(false), setBoardTicTacToe(originalBoardTicTacToe);
            }}
          >
            Salir
          </ButtonBack>
        </article>
      )}
    </>
  );
};

export default BoardTictactoe;
