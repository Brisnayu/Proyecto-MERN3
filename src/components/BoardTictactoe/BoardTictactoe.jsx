import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ButtonBack, ButtonSyled, ButtonTicTacToe } from "../UI/ButtonStyled";
import "./BoardTictactoe.css";
import GameInit from "../GameInit/GameInit";
import ModalInformation from "../ModalInformation/ModalInformation";
import { RulesPlayTicTacToe } from "../../functions/RulesGames";

const BoardTictactoe = () => {
  const [starGame, setStarGame] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [turn, setTurn] = useState("");

  const originalBoardTicTacToe = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  // console.log(originalBoardTicTacToe[0][0])

  const [boardTicTacToe, setBoardTicTacToe] = useState(originalBoardTicTacToe);

  const changedBoardTicTacToe = (event, indexColumn, indexRow) => {
    const pruebaProyecto = [...boardTicTacToe];
    const valueColumn = indexColumn;
    const valueRow = indexRow;

    pruebaProyecto[valueColumn][valueRow] = turn;

    setBoardTicTacToe(pruebaProyecto);

    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
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
          {turn === "" ? (
            <div className="selected-token">
              Selecciona con tu ficha:
              <div>
                <button onClick={() => setTurn("X")}>X</button>
                <button onClick={() => setTurn("O")}>O</button>
              </div>
            </div>
          ) : (
            <>
              <ButtonSyled
                onClick={() => {
                  setTurn(""), setBoardTicTacToe(originalBoardTicTacToe);
                }}
              >
                Reiniciar
              </ButtonSyled>
              <h2>Es el turno de</h2>
              <h2>"{turn}"</h2>
              <section className="container-board">
                <div>
                  {boardTicTacToe.map((row, indexRow) =>
                    row.map((column, indexColumn) => (
                      <ButtonTicTacToe
                        key={uuidv4()}
                        onClick={(event) =>
                          changedBoardTicTacToe(event, indexRow, indexColumn)
                        }
                      >
                        {column}
                      </ButtonTicTacToe>
                    )),
                  )}
                </div>
                <ButtonBack
                  onClick={() => {
                    setStarGame(false), setBoardTicTacToe(originalBoardTicTacToe);
                  }}
                >
                  Salir
                </ButtonBack>
              </section>
            </>
          )}
        </article>
      )}
    </>
  );
};

export default BoardTictactoe;
