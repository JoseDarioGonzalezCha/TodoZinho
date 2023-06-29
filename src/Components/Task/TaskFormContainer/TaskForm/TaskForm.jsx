import React, { useState } from "react";
import { TaskButton } from "../../TaskButton/TaskButton";

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

  useEffect(() => {
    fetch();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tasks}
        onChange={handleTaskChange}
        placeholder="NAME"
      />

      <textarea
        value={taskDescription}
        onChange={handleDescriptionChange}
        placeholder="DESCRIPTION"
      />

      <TaskButton onClick={handleAddTask} text="SAVE CHANGES" />

      <TaskButton onClick={handleDeleteTask} text="DELETE TASK" />
    </form>
  );
};
