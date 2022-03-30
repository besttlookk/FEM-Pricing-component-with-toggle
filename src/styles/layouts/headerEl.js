import styled from "styled-components";

const HeaderEl = styled.header`
  margin-top: 3rem;
`;

const Heading = styled.h1`
  color: var(--col-gray-blue);
  font-size: 2.5rem;
  text-align: center;
`;

HeaderEl.Heading = Heading;

export default HeaderEl;
