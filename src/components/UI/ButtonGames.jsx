import { styled } from "styled-components";

export const ButtonTicTacToe = styled.button`
  width: 8rem;
  height: 8rem;
  font-size: 5rem;
  border-radius: 10px;
  background-color: var(--color-secondary);
  margin: 0.5rem;
  border: 5px solid var(--color-contrast);
  transition: all 0.5s ease-in-out;
  color: var(--color-background);
  font-weight: bold;

  &:hover {
    box-shadow: 0px 0px 20px 10px var(--color-terciary);
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 2rem;
  }
`;

export const ButtonHangman = styled.button`
  width: 90px;
  height: 90px;
  margin: 5px;
  font-size: 3rem;
  font-family: var(--font-text);
  background: transparent;
  color: transparent;
  font-weight: bold;
  border: 0;
  border-bottom: 3px solid var(--color-contrast);

  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media screen and (max-width: 450px) {
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
  }
`;
