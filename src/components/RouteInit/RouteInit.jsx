import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserAndModalContext } from "../../context/userAndModalContext";

const RouteInit = ({ children }) => {
  const { password } = useContext(UserAndModalContext);

  if (password === "amigo") {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default RouteInit;
