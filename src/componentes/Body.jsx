import React, { useState } from 'react';
import { Dispositivos } from './Dispositivos';
import { Home } from './Home';
import { Perfil } from './Perfil';
import { DispositivoInfo } from './DispositivoInfo';

export const Body = ({ seccion }) => {
  const [vista, setVista] = useState("lista");
  const [seleccionado, setSeleccionado] = useState(null);

  // 👉 Si estás en la vista de detalle de un dispositivo
  if (vista === "detalle") {
    return (
      <div className="h-[90vh] overflow-y-auto">
        <DispositivoInfo dispositivo={seleccionado} volver={() => setVista("lista")} />
      </div>
    );
  }

  // 👉 Si estás en la vista normal (inicio, dispositivos o perfil)
  return (
    <div className="h-[90vh] overflow-y-auto">
      {seccion.toLowerCase() === "inicio" && <Home />}
      {seccion.toLowerCase() === "dispositivos" && (
        <Dispositivos setVista={setVista} setSeleccionado={setSeleccionado} />
      )}
      {seccion.toLowerCase() === "perfil" && <Perfil />}
      {!["inicio", "dispositivos", "perfil"].includes(seccion.toLowerCase()) && (
        <p>No has seleccionado sección</p>
      )}
    </div>
  );
};
