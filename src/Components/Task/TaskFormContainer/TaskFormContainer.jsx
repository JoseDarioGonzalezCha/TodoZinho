import React from "react";

import {
  StyledContainer,
  StyledDate,
  StyledList,
  StyledTitle,
} from "./TaskFormContainer.styles";

import { TaskForm } from "./TaskForm/TaskForm";

export const TaskFormContainer = () => {
  return (
    <StyledContainer>
      <StyledTitle>TASK</StyledTitle>

      <TaskForm />

      <StyledList>
        <h3>LIST</h3>
        <input type="date" />
      </StyledList>

      <StyledDate>
        <h3>DUE DATE</h3>
        <input type="date" />
      </StyledDate>
    </StyledContainer>
  );
};
