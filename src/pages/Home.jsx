import { useContext } from "react";
import Form from "../components/Form/Form";
import { UserAndModalContext } from "../context/userAndModalContext";
import AccessDenied from "../components/AccessDenied/AccessDenied";
import Games from "../components/Games/Games";

import HeaderSection from "../components/HeaderSection/HeaderSection";
import FooterSection from "../components/FooterSection/FooterSection";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";

const Home = () => {
  const { user, setUser, password } = useContext(UserAndModalContext);

  return (
    <main>
      {!user ? (
        <Form />
      ) : password === "amigo" ? (
        <>
          <HeaderSection text="Selecciona uno de los juegos" />
          <Games />
            <ButtonUI
              className="back-button"
              funcionality={() => setUser("")}
              text="SALIR"
            />

          <FooterSection />
        </>
      ) : (
        <>
          <AccessDenied
            img="https://i.pinimg.com/564x/86/86/e2/8686e22fc99e14ec5918f2e3e56a2a41.jpg"
            alt="image-gandalf"
            text="Acceso denegado, clave incorrecta."
          />

          <ButtonUI
            className="basic-button"
            funcionality={() => setUser("")}
            text="¡Reintentar!"
          />
        </>
      )}
    </main>
  );
};

export default Home;
