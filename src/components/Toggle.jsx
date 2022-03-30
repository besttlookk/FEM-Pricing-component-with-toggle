import React from "react";
import ToggleEl from "../styles/components/toggleEl";

const Toggle = ({ setIsToggleActive, isToggleActive }) => {
  return (
    <>
      <ToggleEl.Input
        type="checkbox"
        id="toggle"
        name="checkbox"
        checked={isToggleActive}
        onChange={() => setIsToggleActive((prev) => !prev)}
      />
      <ToggleEl htmlFor="toggle"></ToggleEl>
    </>
  );
};

export default Toggle;
