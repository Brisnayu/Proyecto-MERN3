import { useContext } from "react";
import { styled } from "styled-components";

import { sudokuContext } from "../../../context/sudokuContext";

const TextAlert = styled.h3`
  color: var(--color-contrast);
  text-align: center;
  width: 40rem;
  margin-bottom: 1rem;
`;

const AlertSudoku = () => {
  const { win } = useContext(sudokuContext);

  return (
    <>
      {win === true ? (
        <TextAlert>
          ¡Felicidades! 😀 Has completado el Sudoku de manera exitosa. Eres un maestro del
          razonamiento lógico y la resolución de problemas. Disfruta de tu victoria y
          siéntete feliz de tus habilidades. ¡Continúa desafiándote y sigue disfrutando
          del apasionante mundo del Sudoku! 🚀
        </TextAlert>
      ) : (
        <TextAlert>
          ¡Vaya! 🥹 No has conseguido resolver el Sudoku correctamente en esta ocasión. Los
          números en rojo indican los que no son correctos. Sigue practicando y pronto
          mejorarás tus habilidades en el juego. ¡No te rindas! 🤗
        </TextAlert>
      )}
    </>
  );
};

export default AlertSudoku;
