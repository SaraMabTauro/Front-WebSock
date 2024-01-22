import { useEffect, useRef, useState } from "react";

const LongPollingComponent = () => {
  const [mensaje, setMensaje] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    const connectWebSocket = () => {
      socketRef.current = new WebSocket("ws://localhost:3000");

      socketRef.current.addEventListener("open", (event) => {
        console.log("Conectado al servidor Websocket");
      });

      socketRef.current.addEventListener("mensaje", (event) => {
        setMensaje((prevMensaje) => [...prevMensaje, event.data]);
      });

      socketRef.current.addEventListener("close", (event) => {
        console.log("Desconectado del servidor WebSocket");

        setTimeout(() => {
          connectWebSocket();
        }, 5000);
      });

      socketRef.current.addEventListener("error", (event) => {
        console.error("Error en la conexion de WebSocket", event);
      });
    };

    connectWebSocket();

    return () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };
  }, []);

  const enviarMensaje = (mensaje) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(mensaje);
    } else {
      console.warn("La conexión WebSocket no está abierta.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">

      <h1 className="text-2xl font-semibold mb-4">Mensajes recibidos:</h1>

      <ul>
        {mensaje.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      
      <button className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-100 hover:bg-turquoise-300 hover:text-white" onClick={() => enviarMensaje("Hola, servidor!")}>
        Enviar mensaje al servidor
      </button>

    </div>
  );
};

export default LongPollingComponent;
