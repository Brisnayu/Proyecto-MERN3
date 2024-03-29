import { Alert, AlertTitle, Box, Collapse } from "@mui/material";
import { useContext } from "react";
import { styled } from "styled-components";

import { sudokuContext } from "../../../context/sudokuContext";

const ButtonClose = styled.button`
  border: 0;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
`;

const MessageAlert = ({ severity, title, text, info }) => {
  const { openAlert, dispatch } = useContext(sudokuContext);

  return (
    <Box sx={{ width: "70%" }}>
      <Collapse in={openAlert}>
        <Alert
          severity={severity}
          action={
            <ButtonClose onClick={() => dispatch({ type: "CERRAR_ALERT" })}>
              X
            </ButtonClose>
          }
        >
          <AlertTitle>{title}</AlertTitle>
          {text} <strong>{info}</strong>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default MessageAlert;
