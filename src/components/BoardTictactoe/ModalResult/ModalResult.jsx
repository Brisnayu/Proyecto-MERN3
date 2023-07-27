import { Modal } from "@mui/material";
import { ContainerModal } from "../../ModalInformation/ModalInformation";
import { ButtonSyled } from "../../UI/ButtonStyled";

const ModalResult = ({
  open,
  result,
  text,
  position,
  funcionality,
  handleCloseResult,
}) => {
  return (
    <Modal open={open}>
      <ContainerModal style={{ width: "auto", height: "auto", textAlign: "center" }}>
        <h2>{result}</h2>
        <h2>{text}</h2>
        <p>{position}</p>

        <ButtonSyled
          style={{ color: "black" }}
          onClick={() => {handleCloseResult(); funcionality()}}
        >
          Nueva partida
        </ButtonSyled>
      </ContainerModal>
    </Modal>
  );
};

export default ModalResult;
