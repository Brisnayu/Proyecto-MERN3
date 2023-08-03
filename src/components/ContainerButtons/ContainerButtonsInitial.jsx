import { styled } from "styled-components";

import ButtonUI from "../UI/ButtonUI/ButtonUI";

const ButtonsInitial = styled.div`
  display: flex;
  gap: 5rem;
  margin: 1rem;
  animation: reveal 1s ease-in-out;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

const ContainerButtonsInitial = ({ start, howToPlay }) => {
  return (
    <ButtonsInitial>
      <ButtonUI className="basic-button" funcionality={start} text="Iniciar Juego" />
      <ButtonUI className="basic-button" funcionality={howToPlay} text="¿Cómo jugar?" />
    </ButtonsInitial>
  );
};

export default ContainerButtonsInitial;
