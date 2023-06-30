import React, { useEffect, useState } from "react";

import { StyledSection, StyledTitle } from "./ShowTaskContainer.styles";
import { InputAddNewTask } from "./InputAddNewTask/InputAddNewTask";
import { TaskShow } from "./TaskShow/TaskShow";

export const ShowTaskContainer = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <StyledSection>
      <StyledTitle>MARKET</StyledTitle>

      <InputAddNewTask />
      {tasks.map((task) => (
        <TaskShow id={task.id} name={task.name} key={task.id} />
      ))}
    </StyledSection>
  );
};
