import { ButtonImage } from "../../UI/ButtonGames";

const ButtonSelect = ({ className, funcionality, imgButton, text }) => {
  return (
    <ButtonImage className={className} onClick={() => funcionality()}>
      <img src={imgButton} alt="background" />
      <p>{text}</p>
    </ButtonImage>
  );
};

export default ButtonSelect;
