import { useNavigate } from "react-router-dom";
import "./ContainerButtons.css";
import { ButtonBack, ButtonSyled } from "../UI/ButtonStyled";

const ContainerButtons = () => {
  const navigate = useNavigate();

  return <ButtonBack className="container-button" onClick={() => navigate("/")}>Volver</ButtonBack>;
};

export default ContainerButtons;
