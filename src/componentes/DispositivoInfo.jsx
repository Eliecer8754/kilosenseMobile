import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const DispositivoInfo = ({ dispositivo, volver }) => {
  const [encendido, setEncendido] = useState(dispositivo.estado === 'encendido');

  // Datos ficticios de consumo mensual (solo se generan una vez)
  const [data] = useState(() => 
    [
        { mes: 'Ene', consumo: Math.floor(Math.random() * 10 + 10) },
        { mes: 'Feb', consumo: Math.floor(Math.random() * 10 + 10) },
        { mes: 'Mar', consumo: Math.floor(Math.random() * 10 + 10) },
        { mes: 'Abr', consumo: Math.floor(Math.random() * 10 + 10) },
        { mes: 'May', consumo: Math.floor(Math.random() * 10 + 10) },
        { mes: 'Jun', consumo: Math.floor(Math.random() * 10 + 10) },
    ]
  );

  return (
    <div className="flex flex-col items-center mt-10 w-[90%] mx-auto text-center">
      <h2 className="text-2xl mb-5">{dispositivo.nombre}</h2>
      <img src={dispositivo.icon} alt={dispositivo.nombre} className="h-32 mb-2" />

      {/* Gráfica pequeña */}
      <div className="w-full h-40 mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis dataKey="mes" />
            <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft', fontSize: 10 }} />
            <Tooltip />
            <Line type="monotone" dataKey="consumo" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Texto debajo de la gráfica, más suave */}
      <span className="text-sm text-gray-300 mb-4">Gasto mensual</span>

      <p className="text-sm">Consumo mensual: {dispositivo.consumo} kWh</p>
      <p className="text-sm">Consumo diario: {dispositivo.consumoD} kWh</p>
      <p className="text-sm">
        Estado actual:{' '}
        <span className={encendido ? 'text-green-400' : 'text-red-400'}>
          {encendido ? 'Encendido' : 'Apagado'}
        </span>
      </p>

      {/* Botón de encender/apagar */}
      <button
        onClick={() => setEncendido(!encendido)}
        className={`mt-3 px-4 py-2 rounded-lg font-semibold ${
          encendido ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {encendido ? 'Apagar' : 'Encender'}
      </button>

      <button
        onClick={volver}
        className="mt-5 px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg"
      >
        Volver
      </button>
    </div>
  );
};
