import React from "react";
import useNetworkStatus from "../utils/hooks/useNetworkStatus";

const OfflinePage = () => {
  const { isOnline } = useNetworkStatus();

  if (isOnline) return null;

  return (
    <div className="offline-container">
      <div className="icon">📶</div>
      <h1>Estás sin conexión</h1>
      <p>Contenido disponible offline:</p>
      <ul>
        <li>Datos recientes</li>
        <li>Configuraciones guardadas</li>
        <li>Historial de actividades</li>
      </ul>
      <h1>Estás sin conexión</h1>
      <p>
        La aplicación funcionará en modo offline. Tu contenido reciente sigue
        disponible.
      </p>
      <button
        className="refresh-button"
        onClick={() => window.location.reload()}
      >
        Reintentar conexión
      </button>
    </div>
  );
};

export default OfflinePage;
