import React from "react";

import { StyledSection } from "./TaskContainer.styles";
import { TaskForm } from "./TaskForm/TaskForm";
import { SubTasks } from "./SubTasks/SubTasks";
import { TaskButton } from "./TaskButton/TaskButton";

export const TaskContainer = () => {
  return (
    <StyledSection>
      <TaskForm />
      <SubTasks />
      <TaskButton />
    </StyledSection>
  );
};
