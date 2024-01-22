/*import React, { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from '../config';
import axios from 'axios';

const ClienteContext = createContext();

const ClienteContextProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const response = await fetch(`${API_URL}/api/clientes`);
        const data = await response.json();
        setClientes(data);
        // Realizar otras operaciones si es necesario
      } catch (error) {
        console.error('Error al obtener la lista de clientes:', error);
      }
    };

    obtenerClientes();
  }, []); 


  return (
    <ClienteContext.Provider value={{ clientes }}>
      {children}
    </ClienteContext.Provider>
  );
};

const useClienteContext = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error('useClienteContext debe usarse dentro de un ClienteContextProvider');
  }
  return context;
};

export { ClienteContextProvider, useClienteContext };*/
