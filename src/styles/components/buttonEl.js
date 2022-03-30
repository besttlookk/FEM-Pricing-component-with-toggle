import styled from "styled-components";

const ButtonEl = styled.button`
  display: inline-block;
  text-transform: uppercase;
  font-weight: 700;
  font-family: inherit;
  width: 100%;
  border-radius: 5px;
  outline: none;
  padding: 1rem 0;
  color: ${({ front }) => (front ? "hsl(237, 63%, 64%)" : "White")};
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 0.5s;

  &:hover {
    color: white;
    background: transparent;
    color: ${({ front }) => (!front ? "hsl(237, 63%, 64%)" : "White")};
    border-color: ${({ front }) => (!front ? "hsl(237, 63%, 64%)" : "White")};
  }
`;

export default ButtonEl;
