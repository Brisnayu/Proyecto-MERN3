import { useContext, useState } from "react";
import { ButtonBack, ButtonSyled } from "../UI/ButtonStyled";
import "./BoardTictactoe.css";
import GameInit from "../GameInit/GameInit";
import ModalInformation from "../ModalInformation/ModalInformation";
import { RulesPlayTicTacToe } from "../../functions/RulesGames";
import ModalResult from "./ModalResult/ModalResult";
import { tictactoeContext } from "../../context/tictactoeContext";
import GameTictactoe from "./GameTictactoe/GameTictactoe";
import { UserAndModalContext } from "../../context/userAndModalContext";


const BoardTictactoe = () => {
  const { starGame, winnerPosition, openWinner, openTied, turn, winner, dispatch } =
    useContext(tictactoeContext);

  const { handleOpen } = useContext(UserAndModalContext);

  const originalBoardTicTacToe = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [boardTicTacToe, setBoardTicTacToe] = useState(originalBoardTicTacToe);

  return (
    <>
      {!starGame ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled onClick={() => dispatch({ type: "INICIAR_PARTIDA" })}>
              Iniciar juego
            </ButtonSyled>
            <ButtonSyled onClick={() => handleOpen()}>¿Cómo jugar?</ButtonSyled>
          </div>

          <GameInit imgInit="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1690376140/Proyecto6%2C%20Hub%20de%20Juegos/two-people_ooxblq.png" />

          <ModalInformation nameGame={"Tres en Raya"} rules={RulesPlayTicTacToe} />
        </>
      ) : (
        <article className="card-board">
          <ButtonSyled
            onClick={() => {
              dispatch({ type: "REINICIAR_PARTIDA" });
              setBoardTicTacToe(originalBoardTicTacToe);
            }}
          >
            Reiniciar
          </ButtonSyled>

          <GameTictactoe
            boardTicTacToe={boardTicTacToe}
            setBoardTicTacToe={setBoardTicTacToe}
          />

          {!winner ? (
            <ModalResult
              open={openTied}
              result="¡Ha sido empate! 🤨"
              text="¿Jugamos la revancha?"
              funcionality={() => dispatch({ type: "RESETEAR_PARTIDA" })}
              handleCloseResult={() => {
                dispatch({ type: "CERRAR_MODAL_EMPATE" });
                setBoardTicTacToe(originalBoardTicTacToe);
              }}
            />
          ) : (
            <ModalResult
              open={openWinner}
              result="¡Felicidades! 🥳🎉"
              text={`El ganador es "${turn === "X" ? "O" : "X"}"`}
              position={`Haz ganado en dirección ${winnerPosition}`}
              funcionality={() => dispatch({ type: "RESETEAR_PARTIDA" })}
              handleCloseResult={() => {
                dispatch({ type: "CERRAR_MODAL_GANADOR" });
                setBoardTicTacToe(originalBoardTicTacToe);
              }}
            />
          )}

          <ButtonBack
            onClick={() => {
              dispatch({ type: "SALIR_JUEGO" });
              setBoardTicTacToe(originalBoardTicTacToe);
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
