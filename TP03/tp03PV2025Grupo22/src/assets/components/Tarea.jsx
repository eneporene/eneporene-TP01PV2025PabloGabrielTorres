import React, { useState, useEffect } from "react";

function Tarea() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      nombre: "iniciar proyecto",
      descripcion: "crear repositorio en Github y subir los cambios",
      fecha: "14-06-25",
    },
  ]);

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    console.log("Tareas actuales:", tasks);
  }, [tasks]);

  // Función para formatear fecha a día-mes-año
  const formatearFecha = (fechaInput) => {
    const partes = fechaInput.split("-"); // formato yyyy-mm-dd
    const anio = partes[0];
    const mes = partes[1];
    const dia = partes[2];
    return `${dia}-${mes}-${anio}`;
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!nombre || !descripcion || !fecha) return;

    const newTask = {
      id: tasks.length + 1,
      nombre,
      descripcion,
      fecha: formatearFecha(fecha), // usar fecha formateada
    };

    setTasks([...tasks, newTask]);
    setNombre("");
    setDescripcion("");
    setFecha("");

    // Mostrar mensaje con alert
    alert("Se ha agregado una nueva tarea: "+ nombre + " , "+ descripcion );
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
        <button type="submit">Agregar Tarea</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.nombre}</strong>: {task.descripcion} ({task.fecha})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tarea;