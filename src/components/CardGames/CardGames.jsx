import { ButtonSyled } from "../UI/ButtonStyled";
import "./CardGames.css";

const CardGames = ({ title, subtitle, descrip, src, alt }) => {
  return (
    <article className="container-card-games">
      <section className="card-games-text">
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <p>{descrip}</p>
        <ButtonSyled>Jugar!</ButtonSyled>
      </section>
      <section className="card-games-img">
        <img src={src} alt={alt} />
      </section>
    </article>
  );
};

export default CardGames;
