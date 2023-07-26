import { styled } from "styled-components";

const ContainerInit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;

  > img {
    border-radius: 30%;
    width: 80%;
  }

  > p {
    color: var(--color-contrast);
    font-size: 1.1rem;
    font-style: italic;
  }

  @media screen and (max-width: 425px) {
    margin: 4rem 0;
  }
`;

const GameInit = ({ imgInit }) => {
  return (
    <ContainerInit>
      <p>¿Estás listo para comenzar?</p>
      <img src={imgInit} alt="initial-icon" />
    </ContainerInit>
  );
};

export default GameInit;
