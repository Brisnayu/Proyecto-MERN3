import { styled } from "styled-components";

export const ButtonSyled = styled.button`
  background-color: var(--color-secondary);
  width: 8rem;
  height: 2rem;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    -webkit-box-shadow: 0px 0px 20px 10px var(--color-secondary);
    -moz-box-shadow: 0px 0px 20px 10px var(--color-secondary);
    box-shadow: 0px 0px 20px 10px var(--color-secondary);
    border: none;
    cursor: pointer;
  }
`;
