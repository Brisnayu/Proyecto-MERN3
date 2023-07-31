import "./AccessDenied.css";

const AccessDenied = ({ img, alt, text }) => {
  return (
    <div className="container-denied">
      <img src={img} alt={alt} />
      <h2>{text}</h2>
    </div>
  );
};

export default AccessDenied;
