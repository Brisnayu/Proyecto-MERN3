import { useContext } from "react";
import "./Header.css";
import { UserContext } from "../../context/userContext";

const Header = () => {
  const {user} = useContext(UserContext);

  return (
    <header>
      <h1>Hola {user}</h1>
      <h2>Selecciona uno de los juegos para comenzar</h2>
    </header>
  );
};

export default Header;
