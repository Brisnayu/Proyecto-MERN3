import React, { useState } from "react";
import GameInit from "../GameInit/GameInit";
import { ButtonSyled } from "../UI/ButtonStyled";
import ModalError from "../BoardSudoku/ModalError/ModalError";

const BoardHangman = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <div className="container-group-buttons">
        <ButtonSyled onClick={() => console.log("hola")}>
          Iniciar juego
        </ButtonSyled>
        <ButtonSyled onClick={() => <h1>hola</h1>}>¿Cómo jugar?</ButtonSyled>
      </div>
      <GameInit gifInit="https://i.pinimg.com/originals/01/a8/15/01a81585098f22937ff244dc88b04bc8.gif" />

      <ModalError open={open} handleClose={handleClose} />
    </>
  );
};

export default BoardHangman;
