import "./BoardHangman.css";
import { useState } from "react";
import GameInit from "../GameInit/GameInit";
import { ButtonSyled } from "../UI/ButtonStyled";
import ModalInformation from "../ModalInformation/ModalInformation";
import { RulesPlayingHangman } from "../../functions/RulesGames";
import HangmanInit from "./HangmanInit/HangmanInit";
import HangmanAnswers from "./HangmanAnswers/HangmanAnswers";
import { letterAlphabet } from "../../functions/ArrayHangman";

const BoardHangman = () => {
  const [initialGame, setInitialGame] = useState(false);
  const [chance, setChance] = useState(10);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [selectedWord, setSelectedWord] = useState([]);
  const [arrayGame, setArrayGame] = useState([]);

  const [selectedLetters, setSelectedLetters] = useState(letterAlphabet);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {!initialGame ? (
        <>
          <div className="container-group-buttons">
            <ButtonSyled onClick={() => setInitialGame(true)}>Iniciar juego</ButtonSyled>
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
            <HangmanAnswers
              setSelectedWord={setSelectedWord}
              setChance={setChance}
              setWrongLetters={setWrongLetters}
              arrayGame={arrayGame}
              setSelectedLetters={setSelectedLetters}
            />
          </div>
          <div className="container-letter">
            <HangmanInit
              setInitialGame={setInitialGame}
              chance={chance}
              setChance={setChance}
              wrongLetters={wrongLetters}
              setWrongLetters={setWrongLetters}
              selectedWord={selectedWord}
              selectedLetters={selectedLetters}
              setSelectedLetters={setSelectedLetters}
              arrayGame={arrayGame}
              setArrayGame={setArrayGame}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default BoardHangman;
