import { useContext } from "react";

import AccessDenied from "../components/AccessDenied/AccessDenied";
import FooterSection from "../components/FooterSection/FooterSection";
import Form from "../components/Form/Form";
import Games from "../components/Games/Games";
import HeaderSection from "../components/HeaderSection/HeaderSection";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";
import { UserAndModalContext } from "../context/userAndModalContext";

const Home = () => {
  const { setUser, password, setPassword, loginLocalStorage } =
    useContext(UserAndModalContext);

  const signOut = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <main>
      {password === null ? (
        <Form />
      ) : loginLocalStorage === true ? (
        <>
          <HeaderSection text="Selecciona uno de los juegos" />
          <Games />
          <ButtonUI
            className="back-button"
            funcionality={() => signOut()}
            text="Cerrar sesión"
          />

          <FooterSection />
        </>
      ) : (
        <>
          <AccessDenied
            img="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1691076686/Proyecto6%2C%20Hub%20de%20Juegos/image-gandalf_py1pwj.jpg"
            alt="image-gandalf"
            text="Acceso denegado, clave incorrecta."
          />

          <ButtonUI
            className="basic-button"
            funcionality={() => {
              setPassword(null), setUser(null);
            }}
            text="¡Reintentar!"
          />
        </>
      )}
    </main>
  );
};

export default Home;
