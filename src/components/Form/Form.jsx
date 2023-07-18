import { useState } from "react";
import { ButtonSyled } from "../UI/ButtonStyled";
import "./Form.css";

const Form = ({ setUser }) => {
  const [inputValue, setInputValue] = useState("");

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
            onInput={(event) => setInputValue(event.target.value)}
            type="text"
            placeholder="Introduce el nombre"
          />
        </label>
        <label>
          <input type="password" placeholder="Introduce la clave" />
        </label>
        <ButtonSyled onClick={() => setUser(inputValue)}>Entrar</ButtonSyled>
      </section>
    </article>
  );
};

export default Form;
