import React from "react";

import { TaskForm } from "./TaskForm/TaskForm";
import { StyledContainer } from "./TaskFormContainer.styles";

export const TaskFormContainer = () => {
  return (
    <StyledContainer>
      <TaskForm />
    </StyledContainer>
  );
};
