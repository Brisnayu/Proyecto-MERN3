import { Modal, Typography } from "@mui/material";
import { styled } from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import { UserAndModalContext } from "../../context/userAndModalContext";
import ButtonUI from "../UI/ButtonUI/ButtonUI";

export const ContainerModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: var(--color-primary);
  border: 10px solid var(--color-terciary);
  box-shadow: 24;
  color: var(--color-contrast);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: justify;
  overflow: auto;
  width: 80%;
  height: 30rem;
  animation: reveal 1s ease-in-out;
`;

const ModalInformation = ({ nameGame, rules }) => {
  const { open, handleClose } = useContext(UserAndModalContext);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ContainerModal>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          ¡Juega {nameGame} en todo momento!
        </Typography>
        {rules.map((rule) => (
          <li key={uuidv4()}>🔹 {rule}</li>
        ))}
        <Typography id="modal-modal-description" sx={{ mt: 4 }}>
          ¡Disfruta del desafío!
        </Typography>
        <ButtonUI
          className="basic-button"
          funcionality={handleClose}
          text="Lo tengo 🚀"
        />
      </ContainerModal>
    </Modal>
  );
};

export default ModalInformation;
