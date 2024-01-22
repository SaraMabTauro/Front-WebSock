import React, { useState, useEffect } from "react";

const RecordatoriosComponent = () => {
  const [recordatorios, setRecordatorios] = useState([]);
  const [nuevoRecordatorio, setNuevoRecordatorio] = useState("");

  const agregarRecordatorio = () => {
    if (nuevoRecordatorio.trim() !== "") {
      setRecordatorios((prevRecordatorios) => [
        ...prevRecordatorios,
        nuevoRecordatorio,
      ]);
      setNuevoRecordatorio("");
    }
  };

  useEffect(() => {
    const obtenerRecordatorios = async () => {
      try {
        const response = await fetch("/api/obtenerRecordatorios"); // Reemplaza con tu ruta de servidor
        const data = await response.json();
        setRecordatorios(data.recordatorios || []);
      } catch (error) {
        console.error("Error al obtener recordatorios:", error);
      }
    };

    const longPolling = async () => {
      while (true) {
        await obtenerRecordatorios();
        // Realizar una nueva solicitud después de un tiempo (puedes ajustar el tiempo según tus necesidades)
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    };

    longPolling();

    return () => {
      // Puedes realizar tareas de limpieza si es necesario
    };
  }, []); // Dependencia vacía para que se ejecute solo una vez al montar

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h1 className="text-2xl font-semibold mb-4">Recordatorios:</h1>
      <div className="grid gap-4 grid-cols-3">
        {recordatorios.map((recordatorio, index) => (
          <div
            key={index}
            className="p-4 bg-turquoise-200 rounded-md shadow-md"
          >
            {recordatorio}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-md"
          placeholder="Nuevo recordatorio"
          value={nuevoRecordatorio}
          onChange={(e) => setNuevoRecordatorio(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-turquoise-100 hover:bg-turquoise-300 rounded-md"
          onClick={agregarRecordatorio}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default RecordatoriosComponent;

