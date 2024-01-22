import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHome,
  faPowerOff,
  faComment,
  faUserTie,
  faMessage,
  faBell,
  faPersonBreastfeeding
} from "@fortawesome/free-solid-svg-icons";

const links = [
  { name: "Inicio", icon: faHome, to: '/dash' },
  { name: "Clientes", icon: faUsers, to: '/dash/cliente' },
  { name: "Mensajes", icon: faMessage, to: '/dash/mensajes' },
  { name: "Recordatorios", icon: faBell, to: '/dash/recordatorio' },
  { name: "Chat", icon: faComment, to: '/dash/chat'},
];

const Dash = () => {
  return (
    <div className="flex flex-col h-full bg-turquoise-500 text-white px-3 py-4">
      <button className="flex items-end justify-start rounded-md bg-turquoise-700 p-4 mb-2">
        <div className="w-32 text-white">
          <FontAwesomeIcon icon={faPersonBreastfeeding} className="text-3xl"/>
        </div>
      </button>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <button
            key={link.name}
            className="flex items-center gap-2 p-3 text-sm font-medium rounded-md hover:bg-turquoise-400 hover:text-white"
          >
            <FontAwesomeIcon icon={link.icon} className="w-6" />
            <div>{link.name}</div>
          </button>
        ))}

        <button className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-800 hover:bg-turquoise-600 hover:text-white">
          <FontAwesomeIcon icon={faPowerOff} className="w-6" />
          <div>Salir</div>
        </button>

        <button className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-800 hover:bg-turquoise-600 hover:text-white">
          <FontAwesomeIcon icon={faUserTie} className="w-6"/>
          <div>Estado de cuenta</div>
        </button>

      </div>
    </div>
  );
};

export default Dash;

/*import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faHome,
  faPowerOff,
  faComment,
  faUserTie,
  faUniversity,
  faUniversalAccess,
  faMessage,
  faBell,
  faPersonBreastfeeding
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const links = [
  { name: "Inicio", icon: faHome, to: '/dash' },
  { name: "Clientes", icon: faUsers, to: '/dash/cliente' },
  { name: "Mensajes", icon: faMessage, to: '/dash/mensajes' },
  { name: "Recordatorios", icon: faBell, to: '/dash/recordatorio' },
  { name: "Chat", icon: faComment, to: '/dash/chat'},
];

const DashLinks = () => {
  const location = useLocation();
  const activeLink = links.find(link => location.pathname.startsWith(link.to))?.name || 'Inicio';

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          to={link.to}
          className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-cyan-500 md:flex-none md:justify-start md:p-2 md:px-3 ${
            activeLink === link.name ? 'bg-cyan-300 text-cyan-800' : ''
          }`}
        >
          <FontAwesomeIcon icon={link.icon} className="w-6" />
          <p className="hidden md:block">{link.name}</p>
        </Link>
      ))}
    </>
  );
};

const Dash = () => {
  return (
    <div className="flex flex-col h-full bg-turquoise-500 text-white px-3 py-4">
      <button className="flex items-end justify-start rounded-md bg-turquoise-700 p-4 mb-2">
        <div className="w-32 text-white">
          <FontAwesomeIcon icon={faPersonBreastfeeding} className="text-3xl"/>
        </div>
      </button>
      <div className="flex flex-col gap-2">
        <DashLinks />
        
        <button className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-800 hover:bg-turquoise-600 hover:text-white">
          <FontAwesomeIcon icon={faPowerOff} className="w-6" />
          <div>Salir</div>
        </button>

        <button className="flex items-center gap-3 p-3 text-sm font-medium rounded-md bg-turquoise-800 hover:bg-turquoise-600 hover:text-white">
          <FontAwesomeIcon icon={faUserTie} className="w-6"/>
          <div>Estado de cuenta</div>
        </button>

        <button className="flex items-center gap-3 p-3 text-sm font-medium rounded-sm bg-turquoise-300 hover:bg-emerald-500 hover:text-white">
          <FontAwesomeIcon icon={faUniversity}/>
          <div>Acceso de usuarios</div>
        </button>

        <button className="flex items-center gap-3 p-3 text-sm font-medium rounded-sm bg-turquoise-300 hover:bg-teal-700 hover:text-white">
          <FontAwesomeIcon icon={faUniversalAccess}/>
          <div>Mediaciones</div>
        </button>
      </div>
    </div>
  );
};

export default Dash;*/
