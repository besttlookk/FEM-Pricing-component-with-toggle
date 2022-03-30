import styled, { css } from "styled-components";

const ButtonEl = styled.button`
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  font-family: inherit;
  width: 100%;
  border-radius: 5px;
  outline: none;
  padding: 1rem 0;
  color: ${({ front }) => (front ? "var(--col-primary)" : "White")};
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.5s;

  &:hover {
    color: white;
    background: transparent;
    ${({ front }) =>
      front
        ? css`
            color: white;
            border-color: white;
          `
        : css`
            color: var(--col-primary);
            border-color: var(--col-primary);
          `}
  }
`;

export default ButtonEl;
