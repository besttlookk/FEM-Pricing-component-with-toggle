import styled from "styled-components";
import media from "./media";

export const MainEl = styled.main`
  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  width: 90vw;
  margin: 0 auto;
  min-height: 100vh;

  ${media.tablet} {
    padding: 0 1rem;
  }
`;

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: var(--col-light-gray-blue);
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  margin-top: 4rem;

  ${media.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    margin-top: 5rem;
  }
`;
