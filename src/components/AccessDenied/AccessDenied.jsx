import "./AccessDenied.css";
import { ButtonSyled } from "../UI/ButtonStyled";

const AccessDenied = () => {
  return (
    <div className="container-denied">
      <img
        src="https://i.pinimg.com/564x/86/86/e2/8686e22fc99e14ec5918f2e3e56a2a41.jpg"
        alt="image-gandalf"
      />
      <h2>Acceso denegado, nombre o clave incorrecta!</h2>
      <ButtonSyled onClick={() => window.location.replace("")}>Reintentar!</ButtonSyled>
    </div>
  );
};

export default AccessDenied;
