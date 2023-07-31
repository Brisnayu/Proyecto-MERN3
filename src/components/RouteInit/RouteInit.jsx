import { useContext } from "react";
import { UserAndModalContext } from "../../context/userAndModalContext";
import { Navigate } from "react-router-dom";

const RouteInit = ({ children }) => {
  const { user } = useContext(UserAndModalContext);

  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default RouteInit;