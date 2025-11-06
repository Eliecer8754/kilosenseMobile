import React, { useState, useEffect } from 'react';
import { Footer } from './componentes/Footer.jsx';
import { Body } from './componentes/Body.jsx';

const App = () => {
  // 📱 Estado para guardar tamaño de pantalla
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // 📂 Estado para manejar la sección actual
  const [seccion, setSeccion] = useState('inicio');

  // 🧩 Actualiza el tamaño de la pantalla al redimensionar
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

  // 🪶 (Opcional) Ver en consola la sección actual — útil para depurar
  useEffect(() => {
    console.log('Sección actual:', seccion);
  }, [seccion]);

  return (
    <div
      style={{
        width: `${screenSize.width}px`,
        height: `${screenSize.height}px`,
      }}
      className="overflow-hidden bg-gray-900 text-white flex flex-col"
    >
      {/* Contenido principal dinámico */}
      <Body seccion={seccion} />

      {/* Footer con el control de navegación */}
      <Footer setSeccion={setSeccion} />
    </div>
  );
};

export default App;
