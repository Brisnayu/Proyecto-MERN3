import { styled } from "styled-components";

import ButtonUI from "../UI/ButtonUI/ButtonUI";

const ButtonsGames = styled.div`
  display: flex;
  gap: 5rem;
  margin: 1rem;
  animation: reveal 1s ease-in-out;

  @media screen and (max-width: 768px) {
    gap: 1rem;
  }
`;

const ContainerButtonsFinish = ({ restart, exit }) => {
  return (
    <ButtonsGames>
      <ButtonUI className="basic-button" funcionality={restart} text="Reiniciar" />
      <ButtonUI className="back-button" funcionality={exit} text="Salir" />
    </ButtonsGames>
  );
};

export default ContainerButtonsFinish;
