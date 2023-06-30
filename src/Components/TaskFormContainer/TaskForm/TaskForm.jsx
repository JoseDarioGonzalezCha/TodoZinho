import React, { useState } from "react";

import { TaskButton } from "../../Task/TaskButton/TaskButton";
import { TaskCategory } from "../TaskCategory/TaskCategory";
import { TaskDate } from "../TaskDate/TaskDate";
import { SubTasks } from "../SubTasks/SubTasks";

import { StyledForm, StyledInput, StyledTextarea } from "./TaskForm.styles";

export const TaskForm = () => {
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState([]);

  const handleTaskChange = (event) => {
    setTasks(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Texto del input:", tasks);
    console.log("Texto del textarea:", taskDescription);
  };

  const handleAddTask = () => {
    // Lógica para agregar la tarea
    console.log("Tarea agregada");
  };

  const handleDeleteTask = () => {
    // Lógica para eliminar la tarea
    console.log("Tarea eliminada");
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledForm>
        <StyledInput
          type="text"
          value={tasks}
          onChange={handleTaskChange}
          placeholder="NAME"
        />

        <StyledTextarea
          value={taskDescription}
          onChange={handleDescriptionChange}
          placeholder="DESCRIPTION"
        />
      </StyledForm>

      <div>
        <TaskCategory />
        <TaskDate />
      </div>

      <SubTasks />

      <div>
        <TaskButton onClick={handleAddTask} text="SAVE CHANGES" />

        <TaskButton onClick={handleDeleteTask} text="DELETE TASK" />
      </div>
    </form>
  );
};
