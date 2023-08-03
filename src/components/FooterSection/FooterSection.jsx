import "./FooterSection.css";

import { v4 as uuidv4 } from "uuid";

import { SocialNetwork } from "../../functions/SocialNetwork";

const FooterSection = () => {
  return (
    <div className="footerSection">
      <div>
        <p>Creado con cariño 💕 por Brisna Páez para Rock The Code.</p>
      </div>
      <div className="icon-rrss">
        {SocialNetwork.map((rrss) => (
          <a href={rrss.url} target="_blank" key={uuidv4()} rel="noreferrer">
            <img src={rrss.img} alt={rrss.alt} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
