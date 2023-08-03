import { useContext } from "react";
import { UserAndModalContext } from "../../context/userAndModalContext";
import { Navigate } from "react-router-dom";

const RouteInit = ({ children }) => {
  const { password } = useContext(UserAndModalContext);

  if (password === "amigo") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default RouteInit;