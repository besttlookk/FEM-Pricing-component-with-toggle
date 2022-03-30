import styled from "styled-components";
import media from "../media";

const CardEl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 3px 10px 5px hsla(237, 63%, 64%, 0.2);
  color: ${({ front }) => (front ? "white" : "var(--col-light-gray-blue)")};
  padding: 2rem;
  text-align: center;

  ${media.tablet} {
    transform: ${({ front }) => (front ? "scaleY(1.1)" : "")};
  }
`;

const Heading = styled.h3`
  font-size: 1.1rem;
`;

const Price = styled.p`
  color: ${({ front }) => (front ? "white" : "var(--col-dark-gray-blue)")};
  font-size: 4rem;
`;

const List = styled.ul`
  list-style: none;
  border-top: var(--border-dark);
`;

const ListItem = styled.li`
  padding: 1rem;
  border-bottom: var(--border-dark);
`;

const Button = styled.div`
  margin-top: 1rem;
`;

CardEl.Heading = Heading;
CardEl.Price = Price;
CardEl.List = List;
CardEl.ListItem = ListItem;
CardEl.Button = Button;

export default CardEl;
