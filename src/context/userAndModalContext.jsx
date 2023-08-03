import { createContext, useEffect, useState } from "react";

export const UserAndModalContext = createContext();

const UserAndModalContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  const [loginLocalStorage, setLoginLocalStorage] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setLoginLocalStorage(true);
      setUser(localStorage.getItem("user"));
      setPassword(localStorage.getItem("password"));
    }
  }, [user]);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <UserAndModalContext.Provider
      value={{
        user,
        setUser,
        password,
        setPassword,
        loginLocalStorage,
        setLoginLocalStorage,
        open,
        setOpen,
        handleOpen,
        handleClose,
      }}
    >
      {children}
    </UserAndModalContext.Provider>
  );
};

export default UserAndModalContextProvider;
