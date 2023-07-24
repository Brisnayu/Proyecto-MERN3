import "./BoardHangman.css";
import { useContext, useState } from "react";
import GameInit from "../GameInit/GameInit";
import { ButtonSyled } from "../UI/ButtonStyled";
import ModalInformation from "../ModalInformation/ModalInformation";
import { RulesPlayingHangman } from "../../functions/RulesGames";
import HangmanInit from "./HangmanInit/HangmanInit";
import HangmanAnswers from "./HangmanAnswers/HangmanAnswers";
import { hangmanContext } from "../../context/hangmanContext";

const BoardHangman = () => {
  // const [initialGame, setInitialGame] = useState(false);
  // const [chance, setChance] = useState(10);
  // const [wrongLetters, setWrongLetters] = useState([]);
  // const [selectedWord, setSelectedWord] = useState([]);
  // const [arrayGame, setArrayGame] = useState([]);

  // const [selectedLetters, setSelectedLetters] = useState(letterAlphabet);

  const { initialGame, selectedWord, dispatch } = useContext(hangmanContext);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {!initialGame ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled onClick={() => {dispatch({ type: "INICIAR_JUEGO" }), dispatch({ type: "ARRAY_JUEGO" })}}>
              Iniciar juego
            </ButtonSyled>
            <ButtonSyled onClick={() => handleOpen()}>¿Cómo jugar?</ButtonSyled>
          </div>

          <GameInit gifInit="https://i.pinimg.com/originals/01/a8/15/01a81585098f22937ff244dc88b04bc8.gif" />

          <ModalInformation
            open={open}
            handleClose={handleClose}
            nameGame={"El Ahorcado"}
            rules={RulesPlayingHangman}
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
