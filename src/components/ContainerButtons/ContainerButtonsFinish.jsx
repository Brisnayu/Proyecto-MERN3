import ButtonUI from "../UI/ButtonUI/ButtonUI";
import { styled } from "styled-components";

const ButtonsGames = styled.div`
  display: flex;
  gap: 5rem;
  margin: 1rem;

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
