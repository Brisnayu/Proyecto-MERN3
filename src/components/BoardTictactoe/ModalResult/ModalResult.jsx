import { Modal } from "@mui/material";

import { ContainerModal } from "../../ModalInformation/ModalInformation";
import ButtonUI from "../../UI/ButtonUI/ButtonUI";

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

        <ButtonUI
          className="basic-button"
          funcionality={() => {
            handleCloseResult();
            funcionality();
          }}
          text="Nueva partida"
        />
      </ContainerModal>
    </Modal>
  );
};

export default ModalResult;
