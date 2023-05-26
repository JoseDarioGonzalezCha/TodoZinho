import React from "react";

import { StyledContainer, StyledTitle } from "./TaskForm.styles";

export const TaskForm = () => {
  return (
    <StyledContainer>
      <StyledTitle>TASK</StyledTitle>

      <input type="text" />
      <textarea></textarea>

      <div>
        <h3>LIST</h3>
        <input type="date" />
      </div>

      <div>
        <h3>DUE DATE</h3>
        <input type="date" />
      </div>
    </StyledContainer>
  );
};
