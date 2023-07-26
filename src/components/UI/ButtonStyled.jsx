import { styled } from "styled-components";

export const ButtonSyled = styled.button`
  background-color: var(--color-secondary);
  width: 8rem;
  height: 2rem;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  font-size: 1rem;

  &:hover {
    box-shadow: 0px 0px 20px 10px var(--color-secondary);
    border: none;
    cursor: pointer;
  }
`;

export const ButtonBack = styled.button`
  background-color: var(--color-terciary);
  width: 8rem;
  height: 2rem;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  font-size: 1rem;
  color: var(--color-contrast);

  &:hover {
    box-shadow: 0px 0px 20px 10px var(--color-terciary);
    border: none;
    cursor: pointer;
  }
`;

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
`;
