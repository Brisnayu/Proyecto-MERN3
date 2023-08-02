import { createContext, useState } from "react";

export const UserAndModalContext = createContext();

const UserAndModalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <UserAndModalContext.Provider
      value={{ user, setUser, password, setPassword, open, setOpen, handleOpen, handleClose }}
    >
      {children}
    </UserAndModalContext.Provider>
  );
};

export default UserAndModalContextProvider;