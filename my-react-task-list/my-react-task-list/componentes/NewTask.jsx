import React, { useState, useEffect } from 'react';

const MyReactTaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Cargar tareas desde localStorage al cargar el componente
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    // Almacenar tareas en localStorage cada vez que cambien
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskChange = (index) => {
    // Manejar el cambio de estado de una tarea específica
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const renderTasks = () => {
    return tasks.map((task, index) => (
      <div key={index}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleTaskChange(index)}
        />
        <span>{task.description}</span>
      </div>
    ));
  };

  return (
    <div>
      <h1>My Task List</h1>
      {renderTasks()}
    </div>
  );
};

export default NewTask;
