import { styled } from "styled-components";

const ContainerFinishHangman = styled.div`
  color: var(--color-contrast);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  animation: reveal 1s ease-in-out;
  padding-bottom: 1.5rem;

  > img {
    width: 40%;
    height: auto;
  }
`;

const ResultHangman = ({ text, gif, altGif, question }) => {
  return (
    <ContainerFinishHangman>
      <h3>{text}</h3>
      <img src={gif} alt={altGif} />
      <h3>{question}</h3>
    </ContainerFinishHangman>
  );
};

export default ResultHangman;
