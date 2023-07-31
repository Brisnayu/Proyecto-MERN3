import "./BoardHangman.css";
import { useContext } from "react";
import GameInit from "../GameInit/GameInit";
import { ButtonSyled } from "../UI/ButtonStyled";
import ModalInformation from "../ModalInformation/ModalInformation";
import { RulesPlayHangman } from "../../functions/RulesGames";
import HangmanInit from "./HangmanInit/HangmanInit";
import HangmanAnswers from "./HangmanAnswers/HangmanAnswers";
import { hangmanContext } from "../../context/hangmanContext";
import { UserAndModalContext } from "../../context/userAndModalContext";

const BoardHangman = () => {

  const { initialGame, dispatch } = useContext(hangmanContext);

  const { handleOpen } = useContext(UserAndModalContext);

  return (
    <>
      {!initialGame ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled
              onClick={() => {
                dispatch({ type: "INICIAR_JUEGO" });
                dispatch({ type: "CREAR_ARRAY_GAME" });
              }}
            >
              Iniciar juego
            </ButtonSyled>
            <ButtonSyled onClick={() => handleOpen()}>¿Cómo jugar?</ButtonSyled>
          </div>

          <GameInit imgInit="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1690376140/Proyecto6%2C%20Hub%20de%20Juegos/open-door_rfp49w.png" />

          <ModalInformation
            nameGame={"El Ahorcado"}
            rules={RulesPlayHangman}
          />
        </>
      ) : (
        <div className="container-initial-game">
          <div>
            <HangmanAnswers />
          </div>
          <div className="container-letter">
            <HangmanInit />
          </div>
        </div>
      )}
    </>
  );
};

export default BoardHangman;
