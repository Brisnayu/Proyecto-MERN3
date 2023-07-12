import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { Navigate } from "react-router-dom";

const RouteInit = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default RouteInit;