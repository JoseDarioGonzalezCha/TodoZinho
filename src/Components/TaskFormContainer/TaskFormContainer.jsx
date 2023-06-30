import React from "react";

import { TaskForm } from "./TaskForm/TaskForm";

import { TaskCategory } from "./TaskCategory/TaskCategory";
import { TaskDate } from "./TaskDate/TaskDate";

import { StyledContainer } from "./TaskFormContainer.styles";

export const TaskFormContainer = () => {
  return (
    <StyledContainer>
      <TaskForm />
      <TaskCategory />
      <TaskDate />
    </StyledContainer>
  );
};
