import "./Form.css";
import { useContext, useState } from "react";
import { UserAndModalContext } from "../../context/userAndModalContext";
import ButtonUI from "../UI/ButtonUI/ButtonUI";

const Form = () => {
  const { setUser, setPassword } = useContext(UserAndModalContext);
  const [inputValue, setInputValue] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const getUser = (event) => setInputValue(event.target.value);
  const getPassword = (event) => setInputPassword(event.target.value);

  return (
    <article className="container-form">
      <section className="first-section">
        <img
          src="https://i0.wp.com/elanillounico.com/wp-content/uploads/2016/01/Phil-Dragash-La-Puerta-Oeste-de-Moria-copia.jpg?fit=763%2C715&ssl=1"
          alt="image-gandalf"
        />
      </section>
      <section className="second-section">
        <h2>Habla amigo y entra</h2>
        <label>
          <input
            onInput={(event) => getUser(event)}
            type="text"
            placeholder="Introduce tu nombre"
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="Introduce la clave"
            onInput={(event) => getPassword(event)}
          />
        </label>

        {inputValue !== "" && (
          <ButtonUI
            className="basic-button"
            funcionality={() => {
              setUser(inputValue), setPassword(inputPassword);
            }}
            text="Entrar"
          />
        )}
      </section>
    </article>
  );
};

export default Form;
