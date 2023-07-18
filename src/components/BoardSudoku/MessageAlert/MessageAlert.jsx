import { Alert, AlertTitle, Box, Collapse } from "@mui/material";
import { styled } from "styled-components";

const ButtonClose = styled.button`
  border: 0;
  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;
  background: transparent;
`;

const MessageAlert = ({ openAlert, setOpenAlert, severity, title, text, info }) => {
  return (
    <Box sx={{ width: "70%" }}>
      <Collapse in={openAlert}>
        <Alert
          severity={severity}
          action={
            <div onClick={() => setOpenAlert(false)}>
              <ButtonClose>X</ButtonClose>
            </div>
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
