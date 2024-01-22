import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from './layout/Layout';
import Tabla from './components/ListaCliente';
import Login from './components/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Login/>
      <Tabla/>
    </Layout>
  </React.StrictMode>
);

