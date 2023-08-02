import AccessDenied from "../components/AccessDenied/AccessDenied";
import { NavLink } from "react-router-dom";
import { ButtonLink } from "../components/UI/ButtonGames";

const NotFound = () => {
  return (
    <main>
      <AccessDenied
        img="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1690823748/Proyecto6%2C%20Hub%20de%20Juegos/gif-not-found_wtih6x.gif"
        alt="gif-not-found"
        text="Lo siento, la página que buscas no está disponible o es incorrecta."
      />
      <ButtonLink>
        <NavLink to="/">Volver</NavLink>
      </ButtonLink>
    </main>
  );
};

export default NotFound;
