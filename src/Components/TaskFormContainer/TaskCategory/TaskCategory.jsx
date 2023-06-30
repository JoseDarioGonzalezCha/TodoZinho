import React from "react";

import { StyledDiv, StyledH3, StyledInput } from "./TaskCategory.styles";

export const TaskCategory = () => {
  return (
    <StyledDiv>
      <StyledH3>LIST</StyledH3>
      <StyledInput type="date" />
    </StyledDiv>
  );
};
