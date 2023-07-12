import "./HeaderSection.css";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";

const HeaderSection = ({ text }) => {
  const {user} = useContext(UserContext);

  return (
    <div className="headerSection">
      <h1>Hola {user}</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default HeaderSection;
