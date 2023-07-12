import React, { useContext } from "react";
import Form from "../components/Form/Form";
import { UserContext } from "../context/userContext";
import AccessDenied from "../components/AccessDenied/AccessDenied";
import Games from "../components/Games/Games";

import HeaderSection from "../components/HeaderSection/HeaderSection";
import FooterSection from "../components/FooterSection/FooterSection";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

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
        <AccessDenied />
      )}
    </main>
  );
};

export default Home;
