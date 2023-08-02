import { NavLink } from "react-router-dom";
import "./CardGames.css";
import { ButtonLink } from "../UI/ButtonGames";

const CardGames = ({ title, subtitle, descrip, link, src, alt }) => {
  return (
    <article className="container-card-games">
      <section className="card-games-text">
        <h3>{title}</h3>
        <h2>{subtitle}</h2>
        <p>{descrip}</p>
        <ButtonLink>
            <NavLink to={link}>¡Jugar!</NavLink>
        </ButtonLink>
      </section>
      <section className="card-games-img">
        <img src={src} alt={alt} />
      </section>
    </article>
  );
};

export default CardGames;
