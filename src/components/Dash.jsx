import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faHome, faComment, faBell } from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: "Inicio", icon: faHome, to: "/dashboard" },
  { name: "Clientes", icon: faUsers, to: "clients" },
  { name: "Mensajes", icon: faComment, to: "messages" },
  { name: "Recordatorios", icon: faBell, to: "reminders" },
];

const DashboardNavi = () => {
  return (
    <div className="flex flex-col bg-turquoise-500 text-white p-4">
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          className="flex items-center gap-2 p-3 text-sm font-medium rounded-md hover:bg-turquoise-400 hover:text-white"
        >
          <FontAwesomeIcon icon={link.icon} className="w-6" />
          <div>{link.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default DashboardNavi;
