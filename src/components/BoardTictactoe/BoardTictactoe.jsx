import { useEffect, useState } from "react";
import { ButtonSyled, ButtonTicTacToe } from "../UI/ButtonStyled";
import "./BoardTictactoe.css";

const BoardTictactoe = () => {
  const [text, setText] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text8, setText8] = useState("");

  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");

  const [turn, setTurn] = useState("O");

  const tokenExchange = () => {
    console.log("estas cambiando de ficha");

    if (turn === "O") {
      setTurn("X");
    } else {
      setTurn("O");
    }
  };

  useEffect(() => {
    tokenExchange();
  }, [text, text1, text2, text3, text4, text5, text6, text7, text8]);

  return (
    <article className="card-board">
      <h2>Es el turno de</h2>
      <h2>"{turn}"</h2>
      <section className="container-board">
        <div>
          <ButtonTicTacToe onClick={() => setText(turn)}>{text}</ButtonTicTacToe>
          <ButtonTicTacToe onClick={() => setText1(turn)}>{text1}</ButtonTicTacToe>
          <ButtonTicTacToe onClick={() => setText2(turn)}>{text2}</ButtonTicTacToe>
        </div>
        <div>
          <ButtonTicTacToe onClick={() => setText3(turn)}>{text3}</ButtonTicTacToe>
          <ButtonTicTacToe onClick={() => setText4(turn)}>{text4}</ButtonTicTacToe>
          <ButtonTicTacToe onClick={() => setText5(turn)}>{text5}</ButtonTicTacToe>
        </div>
        <div>
          <ButtonTicTacToe onClick={() => setText6(turn)}>{text6}</ButtonTicTacToe>
          <ButtonTicTacToe onClick={() => setText7(turn)}>{text7}</ButtonTicTacToe>
          <ButtonTicTacToe onClick={() => setText8(turn)}>{text8}</ButtonTicTacToe>
        </div>
      </section>

        {text8 !== "" && <ButtonSyled>hola</ButtonSyled>}
      
    </article>
  );
};

export default BoardTictactoe;
