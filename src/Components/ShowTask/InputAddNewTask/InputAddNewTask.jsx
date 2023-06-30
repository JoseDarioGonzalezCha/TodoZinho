import React from "react";
import addcircle from "../../../assets/addcircle.png";
import { StyledDiv, StyledInput } from "./InputAddNewTask.styles";

export const InputAddNewTask = () => {
  return (
    <StyledDiv>
      <img src={addcircle} alt="images add" />
      <StyledInput type="text" placeholder="ADD NEW TASK" />
    </StyledDiv>
  );
};
