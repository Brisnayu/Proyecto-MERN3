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

export const ButtonImage = styled.button`
  width: 18rem;
  height: 18rem;
  border-radius: 50%;
  margin: 2rem;
  position: relative;
  transition: all 0.4s ease-in-out;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    opacity: 0.4;
    position: absolute;
    top: 0;
    right: 0;
  }

  > p {
    position: relative;
    color: var(--color-background);
    font-size: 3rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  &:hover {
    border: 10px solid var(--color-terciary);
    scale: 1.2;
  }

  @media screen and (max-width: 768px) {
    width: 10rem;
    height: 10rem;

    > p {
      font-size: 1.3rem;
    }
  }
`;

export const ButtonLink = styled.button`
  width: 7rem;
  height: 3rem;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.5s ease-in-out;
  font-size: 1rem;
  padding: 0.5rem;
  background-color: var(--color-terciary);
  color: var(--color-contrast);
  letter-spacing: 2px;

  &:hover {
    box-shadow: 0px 0px 20px 10px var(--color-terciary);
    border: none;
    cursor: pointer;
  }
`;
