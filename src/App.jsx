import React, { useState, useEffect } from 'react';
import { Footer } from './componentes/Footer.jsx';
import { Body } from './componentes/Body.jsx';

const App = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [seccion, setSeccion] = useState('inicio');

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: `${screenSize.width}px`,
        height: `${screenSize.height}px`,
      }}
      className="overflow-hidden bg-gray-900 text-white flex flex-col"
    >
      {/* Contenido principal - ocupa el espacio disponible pero deja espacio para el footer */}
      <div className="flex-1 overflow-hidden"> {/* Contenedor adicional */}
        <Body seccion={seccion} />
      </div>

      {/* Footer fijo en la parte inferior */}
      <Footer setSeccion={setSeccion} />
    </div>
  );
};
export default App;
