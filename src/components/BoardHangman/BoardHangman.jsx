import "./BoardHangman.css";
import { useContext, useState } from "react";
import GameInit from "../GameInit/GameInit";
import ModalInformation from "../ModalInformation/ModalInformation";
import { RulesPlayHangman } from "../../functions/RulesGames";
import HangmanInit from "./HangmanInit/HangmanInit";
import HangmanAnswers from "./HangmanAnswers/HangmanAnswers";
import { hangmanContext } from "../../context/hangmanContext";
import { UserAndModalContext } from "../../context/userAndModalContext";
import ContainerButtonsInitial from "../ContainerButtons/ContainerButtonsInitial";
import ContainerButtonsFinish from "../ContainerButtons/ContainerButtonsFinish";
import { wordsHangmanTLOTR, wordsHangmanRandom } from "../../functions/ArrayHangman";
import ButtonUI from "../UI/ButtonUI/ButtonUI";
import ButtonSelect from "./ButtonSelect/ButtonSelect";

const BoardHangman = () => {
  const { initialGame, ready, dispatch } = useContext(hangmanContext);
  const { handleOpen } = useContext(UserAndModalContext);

  const [arrayGameHangman, setArrayGameHangman] = useState([]);

  return (
    <>
      {!initialGame ? (
        <>
          <ContainerButtonsInitial
            start={() => dispatch({ type: "INICIAR_JUEGO" })}
            howToPlay={() => handleOpen()}
          />

          <GameInit imgInit="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1690376140/Proyecto6%2C%20Hub%20de%20Juegos/open-door_rfp49w.png" />

          <ModalInformation nameGame={"El Ahorcado"} rules={RulesPlayHangman} />
        </>
      ) : (
        <>
          {!ready ? (
            <div className="container-buttons-hangman">
              <div className="selected-button-hangman">
                <ButtonSelect
                  className={arrayGameHangman === wordsHangmanRandom && "select"}
                  imgButton="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1691076887/Proyecto6%2C%20Hub%20de%20Juegos/image-letters_fqvpxi.jpg"
                  text="Palabra aleatoria"
                  funcionality={() => setArrayGameHangman(wordsHangmanRandom)}
                />
                <ButtonSelect
                  className={arrayGameHangman === wordsHangmanTLOTR && "select"}
                  imgButton="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1691076887/Proyecto6%2C%20Hub%20de%20Juegos/image-tlotr_d0w0il.jpg"
                  text="Palabra TLOTR"
                  funcionality={() => setArrayGameHangman(wordsHangmanTLOTR)}
                />
              </div>

              {arrayGameHangman.length > 0 && (
                <ButtonUI
                  className="basic-button"
                  text="INICIAR PARTIDA"
                  funcionality={() => {
                    dispatch({ type: "COMENZAR_JUEGO", arrayGameHangman }),
                      dispatch({ type: "CREAR_ARRAY_GAME" }),
                      dispatch({ type: "ESTOY_LISTO" });
                  }}
                />
              )}
            </div>
          ) : (
            <div className="container-initial-game">
              <div>
                <HangmanAnswers />
              </div>
              <div className="container-letter">
                <HangmanInit />
              </div>
              <ContainerButtonsFinish
                restart={() => {
                  dispatch({ type: "REINICIAR_JUEGO", arrayGameHangman }),
                  dispatch({ type: "CREAR_ARRAY_GAME" });
                }}
                exit={() => dispatch({ type: "SALIR_JUEGO" })}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default BoardHangman;
