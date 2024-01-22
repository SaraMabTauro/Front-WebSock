/*import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import ClienteContext from './context/ClienteContextProvider'
import Layout from './layout/Layout';

export default function App() {
    const { usuarioAutenticado, setUsuarioAutenticado } = useContext(ClienteContext);
  
    useEffect(() => {
      const verificarSesion = async () => {
        try {
          const response = await axios.get(`${API_URL}/api/verificar-sesion/`, {
            headers: {
              Authorization: token,
            },
          });
  
          setUsuarioAutenticado(response.data.usuario);
        } catch (error) {
          // Manejar el error o establecer el estado de autenticación según tu lógica
        }
      };
  
      verificarSesion();
    }, [token, setUsuarioAutenticado]);
  
    return (
      <BrowserRouter>
        <Routes>
          {usuarioAutenticado ? (
            <Route
              path="/"
              element={
                <Layout>
                  <Routes>
                    <Route index element={<LadingPage />} />
                    <Route path="/registro" element={<Registro />} />
                  </Routes>
                </Layout>
              }
            />
          ) : (
            <Route
              path="/"
              element={
                <>
                  <Navigate to="/login" replace />
                </>
              }
            />
          )}
  
          <Route path="/login" element={<Login />} />
  
        </Routes>
      </BrowserRouter>
    );
  }*/
  

/*
import React from 'react';
import { ClienteContextProvider } from './ruta/al/ClienteContextProvider';
import Layout from './layout/Layout';

const App = () => {
  return (
    <ClienteContextProvider>
      <div>
        <Layout />
      </div>
    </ClienteContextProvider>
  );
};

export default App;*/
