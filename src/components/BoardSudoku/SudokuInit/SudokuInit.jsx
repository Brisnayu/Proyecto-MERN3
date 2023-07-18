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

const SudokuInit = () => {
  return (
    <ContainerInit>
      <p>¿Estás listo para comenzar?</p>
      <img src="https://i.pinimg.com/originals/b9/16/8c/b9168cbec1a6eb98c7faebee9f8d8891.gif" />
    </ContainerInit>
  );
};

export default SudokuInit;
