import { useContext } from "react";
import Form from "../components/Form/Form";
import { UserAndModalContext } from "../context/userAndModalContext";
import AccessDenied from "../components/AccessDenied/AccessDenied";
import Games from "../components/Games/Games";

import HeaderSection from "../components/HeaderSection/HeaderSection";
import FooterSection from "../components/FooterSection/FooterSection";
import ButtonUI from "../components/UI/ButtonUI/ButtonUI";

const Home = () => {
  const { user, setUser, password, setPassword } = useContext(UserAndModalContext);

console.log(password);
console.log(user)

  return (
    <main>
      {password === null ? (
        <Form />
      ) : password === "amigo" ? (
        <>
          <HeaderSection text="Selecciona uno de los juegos" />
          <Games />
            <ButtonUI
              className="back-button"
              funcionality={() => {setPassword(null), setUser(null)}}
              text="SALIR"
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
            funcionality={() => {setPassword(null), setUser(null)}}
            text="¡Reintentar!"
          />
        </>
      )}
    </main>
  );
};

export default Home;
