import styled from "styled-components";

const FooterEl = styled.footer`
  text-align: center;
  margin-top: 4rem;
  color: var(--col-secondary);

  a {
    color: var(--col-primary);

    &:hover {
      text-decoration: underline;
      text-decoration-thickness: 2px;
      text-underline-offset: 0.1em;
    }
  }
`;

export default FooterEl;
