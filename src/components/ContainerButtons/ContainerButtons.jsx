import { useNavigate } from "react-router-dom";
import "./ContainerButtons.css";
import { ButtonBack, ButtonSyled } from "../UI/ButtonStyled";

const ContainerButtons = () => {
    const navigate = useNavigate();

  return (
    <div className="container-button">
      <ButtonBack onClick={() => navigate("/")}>Volver</ButtonBack>
      <ButtonSyled>Iniciar Juego</ButtonSyled>
    </div>
  );
};

export default ContainerButtons;
