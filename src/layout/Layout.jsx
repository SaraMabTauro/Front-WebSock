/*import React from 'react';
import Dash from '../components/Dashboard';
import Example from '../components/ListaCliente';
import WebSocketComponent from '../sections/LongPolling';
import RecordatoriosComponent from '../sections/Recordatorio';

const Layout = () => {
  return (
    <div className="flex h-screen">
      <Dash />
      <main className="container mx-flow m-4 flex-1 p-4 overflow-x-hidden">
        <Example/>
        <WebSocketComponent/>
        <RecordatoriosComponent/>
      </main>
    </div>
  );
};

export default Layout;

import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardNavi from '../components/Dash';
import Tabla from "../components/ListaCliente";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <DashboardNavi />
      <div className="flex flex-col flex-1">
        <Routes>
          <Route path="/dashboard" element={<Tabla />}>
            
            {/*<Route index element={<Tabla />} />
            <Route path="clients" element={<Clients />} />
            <Route path="messages" element={<Messages />} />
            <Route path="reminders" element={<Reminders />} />
            <Route path="chat" element={<Chat />} />*//*
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;*/


import Dashboard from '../components/Dashboard';

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">

      <Dashboard />

      <main className="flex-1 p-4 overflow-x-hidden">
        {children}
      </main>

    </div>
  );
};

export default Layout;


