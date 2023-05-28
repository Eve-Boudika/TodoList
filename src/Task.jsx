import React, { useState, useEffect } from 'react';

export const Task = () => {
        const [tasks, setTasks] = useState([]);
      
        useEffect(() => {
          const fetchTasks = async () => {
            try {

                        //Consultar a Ganso sobre si la ruta está ok o si falta algo mas en el json//

              const response = await fetch('./Database.json');
              const data = await response.json();
              setTasks(data);
            } catch (error) {
              console.error('Error al obtener las tareas:', error);
            }
          };
      
          fetchTasks();
        }, []);

  return (
    <div>
    <h1>Tareas:</h1>
    {tasks.map(task => (
      <div key={task['nombre de tarea']}>
        <h2>{task['nombre de tarea']}</h2>
        <p>Días: {task.dias.join(', ')}</p>
        <p>Necesita comprar: {task['necesita comprar'] ? 'Sí' : 'No'}</p>
      </div>
    ))}
  </div>
  )
}
