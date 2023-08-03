import "./BoardSudoku.css";

import { equality, readyComparation } from "../../utils/FunctionsSudoku";
import { RulesPlaySudoku } from "../../functions/RulesGames";
import { sudokuContext } from "../../context/sudokuContext";
import { useContext, useState } from "react";
import { UserAndModalContext } from "../../context/userAndModalContext";

import AlertSudoku from "./AlertSudoku/AlertSudoku";
import ArraySudoku from "./ArraySudoku/ArraySudoku";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import ContainerButtonsFinish from "../ContainerButtons/ContainerButtonsFinish";
import ContainerButtonsInitial from "../ContainerButtons/ContainerButtonsInitial";
import GameInit from "../GameInit/GameInit";
import MessageAlert from "./MessageAlert/MessageAlert";
import ModalInformation from "../ModalInformation/ModalInformation";
import ResolvedSudoku from "./ArraySudoku/ResolvedSudoku";

const BoardSudoku = () => {
  const { solution, comprobation, casillas, incomplete, dispatch, originalSudokuBoard } =
    useContext(sudokuContext);

  const { handleOpen } = useContext(UserAndModalContext);

  const [resolutionSudoku, setResolutionSudoku] = useState([]);
  const [newArray, setNewArray] = useState([]);

  return (
    <>
      {!solution && originalSudokuBoard.length === 0 ? (
        <>
          <ContainerButtonsInitial
            start={() => dispatch({ type: "INITIAL_VALUE" })}
            howToPlay={() => handleOpen()}
          />
          <GameInit imgInit="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1690376140/Proyecto6%2C%20Hub%20de%20Juegos/door-closed_m7meln.png" />
        </>
      ) : !comprobation ? (
        <>
          <div className="container-group-buttons">
            <ButtonUI
              className="basic-button"
              funcionality={() => dispatch({ type: "SOLUCION_VALUE" })}
              text="Solución"
            />

            {!casillas ? (
              <ButtonUI
                className="basic-button"
                funcionality={() => readyComparation(resolutionSudoku, dispatch)}
                text="Comprobar"
              />
            ) : (
              <ButtonUI
                className="basic-button"
                funcionality={() => {
                  equality(originalSudokuBoard, resolutionSudoku, setNewArray, dispatch);
                  dispatch({ type: "ESTOY_LISTO" });
                }}
                text="¡Estoy listo!"
              />
            )}
          </div>

          {incomplete ? (
            <MessageAlert
              severity="warning"
              title="Información ☝🏽"
              text="Tienes casillas vacías en tu Sudoku —"
              info="Haz una rápida comprobación."
            />
          ) : (
            <MessageAlert
              severity="info"
              title="Haz completado el sudoku 😀"
              text="Ahora si puedes pulsar el botón de arriba que dice:"
              info="Estoy listo!"
            />
          )}

          <ArraySudoku
            resolutionSudoku={resolutionSudoku}
            setResolutionSudoku={setResolutionSudoku}
          />
        </>
      ) : (
        <div className="container-sudoku-solution">
          <AlertSudoku />
          <ButtonUI
            className="basic-button"
            funcionality={() => dispatch({ type: "INITIAL_VALUE" })}
            text="Reiniciar"
          />
          <ResolvedSudoku newArray={newArray} />
        </div>
      )}

      {solution && (
        <ContainerButtonsFinish
          restart={() => dispatch({ type: "INITIAL_VALUE" })}
          exit={() => dispatch({ type: "SALIR_VALUE" })}
        />
      )}

      <ModalInformation nameGame={"Sudoku"} rules={RulesPlaySudoku} />
    </>
  );
};

export default BoardSudoku;
