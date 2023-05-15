import React, { useState, useEffect } from 'react';
function TaskList() {
    const [tasks, setTasks] = useState([]);
    if(!localStorage.getItem('bgcolor')) {
        populateStorage();
      } else {
        setStyles()
      }
      console.log [tasklist]
  
    useEffect(() => {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (storedTasks) {
        setTasks(storedTasks);
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    // Resto del código del componente...
  }
  
    