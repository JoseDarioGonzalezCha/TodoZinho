import React from "react";

import { StyledSection } from "./TaskContainer.styles";
import { TaskFormContainer } from "./TaskFormContainer/TaskFormContainer";
import { SubTasks } from "./SubTasks/SubTasks";

export const TaskContainer = () => {
  return (
    <StyledSection>
      <TaskFormContainer />
      <SubTasks />
    </StyledSection>
  );
};
