import React from "react";

import { StyledSection, StyledTitle } from "./ShowTaskContainer.styles";
import { InputAddNewTask } from "./InputAddNewTask/InputAddNewTask";
import { TaskShow } from "./TaskShow/TaskShow";

export const ShowTaskContainer = () => {
  return (
    <StyledSection>
      <StyledTitle>MARKET</StyledTitle>

      <InputAddNewTask />
      <TaskShow />
    </StyledSection>
  );
};
