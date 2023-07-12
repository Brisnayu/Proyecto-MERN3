import React, { useContext } from "react";
import Form from "../components/Form/Form";
import { UserContext } from "../context/userContext";
import AccessDenied from "../components/AccessDenied/AccessDenied";
import Games from "../components/Games/Games";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  console.log(user);

  return (
    <main>
      {!user ? (
        <Form setUser={setUser} />
      ) : user === "frodo" ? (
        <Games />
      ) : (
        <AccessDenied />
      )}
    </main>
  );
};

export default Home;
