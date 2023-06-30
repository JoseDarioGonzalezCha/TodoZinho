import React from "react";
import { StyledDiv, StyledH3, StyledInput } from "./TaskDate.styles";

export const TaskDate = () => {
  return (
    <StyledDiv>
      <StyledH3>DUE DATE</StyledH3>
      <StyledInput type="date" />
    </StyledDiv>
  );
};
