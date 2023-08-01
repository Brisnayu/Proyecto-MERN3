import { useNavigate } from "react-router-dom";
import ButtonUI from "../UI/ButtonUI/ButtonUI";

const ContainerButtonBack = () => {
  const navigate = useNavigate();

  return (
    <ButtonUI className="back-button" funcionality={() => navigate("/")} text="Volver" />
  );
};

export default ContainerButtonBack;
