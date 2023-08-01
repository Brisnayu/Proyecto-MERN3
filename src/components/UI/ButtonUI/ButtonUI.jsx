import "./ButtonUI.css";

const ButtonUI = ({ className, funcionality, text }) => {
  return (
    <button className={`basic-style-button + ${className}`} onClick={funcionality}>
      {text}
    </button>
  );
};

export default ButtonUI;
