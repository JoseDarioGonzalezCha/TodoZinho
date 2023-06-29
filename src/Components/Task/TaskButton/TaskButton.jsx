import React from "react";

import { StyledButton, StyledButtonContainer } from "./TaskButton.styles";

export const TaskButton = ({ onClick, text }) => {
  return (
    <StyledButtonContainer>
      <StyledButton onClick={onClick}>{text}</StyledButton>
    </StyledButtonContainer>
  );
};
