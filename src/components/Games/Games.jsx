import { v4 as uuidv4 } from "uuid";
import { ArrayGames } from "../../functions/ArrayGames";
import CardGames from "../CardGames/CardGames";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Games.css";

const Games = () => {
  return (
    <>
    <Header />
      <div className="container-games">
        {ArrayGames.map((game) => 
        <CardGames 
            key={uuidv4()}
            title={game.title}
            subtitle={game.subtitle}
            descrip={game.descrip}
            src={game.src}
            alt={game.alt}
        />)}
      </div>
      <Footer />
    </>
  );
};

export default Games;
