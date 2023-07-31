import React, { useContext } from "react";
import Form from "../components/Form/Form";
import { UserAndModalContext } from "../context/userAndModalContext";
import AccessDenied from "../components/AccessDenied/AccessDenied";
import Games from "../components/Games/Games";

import HeaderSection from "../components/HeaderSection/HeaderSection";
import FooterSection from "../components/FooterSection/FooterSection";
import { ButtonSyled } from "../components/UI/ButtonStyled";

const Home = () => {
  const { user, setUser } = useContext(UserAndModalContext);

  console.log(user);

  return (
    <main>
      {!user ? (
        <Form setUser={setUser} />
      ) : user === "frodo" ? (
        <>
          <HeaderSection text="Selecciona uno de los juegos" />
          <Games />
          <FooterSection />
        </>
      ) : (
        <>
          <AccessDenied
            img="https://i.pinimg.com/564x/86/86/e2/8686e22fc99e14ec5918f2e3e56a2a41.jpg"
            alt="image-gandalf"
            text="Acceso denegado, nombre o clave incorrecta."
          />
          <ButtonSyled onClick={() => setUser("")}>
            Reintentar!
          </ButtonSyled>
        </>
      )}
    </main>
  );
};

export default Home;
