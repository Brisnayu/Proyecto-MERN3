import "./Form.css";
import { useContext, useState } from "react";
import { UserAndModalContext } from "../../context/userAndModalContext";
import ButtonUI from "../UI/ButtonUI/ButtonUI";

const Form = () => {
  const { user, setUser, setPassword, password } = useContext(UserAndModalContext);
  const [inputValue, setInputValue] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const getUser = (event) => setUser(event.target.value);
  const getPassword = (event) => setInputPassword(event.target.value);

  const login = (event) => {
    event.preventDefault();
setPassword(inputPassword);
console.log("hola?");
    if (inputPassword === "amigo") {
      
      localStorage.setItem("user", user);
      console.log("DENTRO DEL IF");
    } else {
      setPassword(inputPassword);
    }
  };

  return (
    <article className="container-form">
      <section className="first-section">
        <img
          src="https://res.cloudinary.com/dx8j6h1rb/image/upload/v1691076568/Proyecto6%2C%20Hub%20de%20Juegos/puertas-tlotr_bizzz9.jpg"
          alt="image-the-lord-of-the-rings"
        />
      </section>
      <form className="second-section">
        <h2>Habla amigo y entra</h2>
        <label>
          <input
            onInput={(event) => getUser(event)}
            type="text"
            placeholder="Introduce tu nombre"
            maxLength={15}
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Introduce la clave"
            onInput={(event) => getPassword(event)}
          />
        </label>

        {user !== null && (
          <ButtonUI
            className="basic-button"
            type="button"
            funcionality={(event) => login(event)}
            text="Entrar"
          />
        )}
      </form>
    </article>
  );
};

export default Form;
// () => {
//               setUser(inputValue), setPassword(inputPassword);
//             }
