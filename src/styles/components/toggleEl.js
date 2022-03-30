import styled from "styled-components";

const ToggleEl = styled.label`
  position: relative;
  display: inline-block;
  transition: 0.3s;
  width: 4rem;
  height: 2.2rem;
  border-radius: 100px;
  cursor: pointer;
  background-image: linear-gradient(
    135deg,
    var(--col-grad-start),
    var(--col-grad-stop)
  );

  &:hover {
    opacity: 0.7;
  }

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: 4px;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: white;
    transition: all 0.5s;
  }
`;

const Input = styled.input`
  display: none;

  &:checked ~ ${ToggleEl}::before {
    transform: translate(115%);
  }
`;

ToggleEl.Input = Input;

export default ToggleEl;
