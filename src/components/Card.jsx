import React from "react";
import CardEl from "../styles/components/cardEl";
import Button from "./Button";

const Card = ({ data, isToggleActive }) => {
  const cardStyle = {
    background: data.front
      ? "linear-gradient(135deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"
      : "white",
  };
  return (
    <CardEl front={data.front} style={cardStyle}>
      <CardEl.Heading>{data.heading}</CardEl.Heading>
      <CardEl.Price front={data.front}>
        <span>$</span>
        {isToggleActive ? data.price.annual : data.price.month}
      </CardEl.Price>
      <CardEl.List>
        <CardEl.ListItem>{data.storage} Storage</CardEl.ListItem>
        <CardEl.ListItem>{data.userAllowed} Users Allowed</CardEl.ListItem>
        <CardEl.ListItem>Send up to {data.limit}</CardEl.ListItem>
      </CardEl.List>
      <CardEl.Button>
        <Button front={data.front} />
      </CardEl.Button>
    </CardEl>
  );
};

export default Card;
