import "./Games.css";

import { v4 as uuidv4 } from "uuid";

import { ArrayGames } from "../../functions/ArrayGames";
import CardGames from "../CardGames/CardGames";

const Games = () => {
  return (
    <>
      <div className="container-games">
        {ArrayGames.map((game) => (
          <CardGames
            key={uuidv4()}
            title={game.title}
            subtitle={game.subtitle}
            descrip={game.descrip}
            link={game.link}
            src={game.src}
            alt={game.alt}
          />
        ))}
      </div>
    </>
  );
};

export default Games;
