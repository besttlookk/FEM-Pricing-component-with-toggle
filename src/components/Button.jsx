import React from "react";
import ButtonEl from "../styles/components/buttonEl";

const Button = ({ front }) => {
  const buttonStyle = {
    background: !front
      ? "linear-gradient(135deg, hsl(236, 72%, 79%), hsl(237, 63%, 64%))"
      : "white",
  };
  return (
    <ButtonEl front={front} className={!front ? "btn-grad" : "btn"}>
      Learn more
    </ButtonEl>
  );
};

export default Button;
