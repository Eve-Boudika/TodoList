import React, { useState, useEffect } from 'react';
import Tareas from '../public/Database.json'

export const Task = () => {
  
      
      

  return (
    <div>
    <h1>Tareas:</h1>
    {Tareas.map(tarea => (
      <div key={tarea['nombre de tarea']}>
        <h2>{tarea['nombre de tarea']}</h2>
        <p>Días: {tarea.dias.join(', ')}</p>
        <p>Necesita comprar: {tarea['necesita comprar'] ? 'Sí' : 'No'}</p>
      </div>
    ))}
  </div>
  )
}
