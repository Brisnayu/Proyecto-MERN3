import "./HeaderSection.css";

import { useContext } from "react";

import { UserAndModalContext } from "../../context/userAndModalContext";

const HeaderSection = ({ text }) => {
  const { user } = useContext(UserAndModalContext);

  return (
    <div className="headerSection">
      <h1>Hola {user}</h1>
      <h2>{text}</h2>
    </div>
  );
};

export default HeaderSection;
