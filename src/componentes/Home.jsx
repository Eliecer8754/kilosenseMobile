import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import logo from "../imagenes/logo.png"
export const Home = () => {
  // Datos ficticios
  const data = [
    { mes: 'Jun', consumo: 120 },
    { mes: 'Jul', consumo: 150 },
    { mes: 'Ago', consumo: 130 },
    { mes: 'Sep', consumo: 160 },
  ]

  return (
    <div>
      <header>
        <h1 className='mt-10 flex justify-center text-3xl font-semibold'>KiloSense</h1>
        <div className="w-20 h-20 rounded-full overflow-hidden absolute right-2 top-2">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <main className='mt-10 flex flex-col items-center'>
        {/* Tarjetas */}
        <div className='flex'>
          <div className='flex flex-col h-30 w-30 rounded-2xl border-2 border-gray-300 justify-center items-center mb-10 mr-5 p-3'>
            <span className='text-5xl flex items-baseline'>150 <small className='text-[8px]'>kWh</small></span>
            <span className='text-[10px] text-center mt-1'>Consumo por mes</span>
          </div>
          <div className='flex flex-col h-30 w-30 rounded-2xl border-2 border-gray-300 justify-center items-center mb-10 p-3'>
            <span className='text-5xl flex items-baseline'>30 <small className='text-[8px]'>kWh</small></span>
            <span className='text-[10px] text-center'>Dispositivo con mayor consumo</span>
          </div>
        </div>

        {/* Gráfica */}
        <div className='w-[90%] h-64 mb-5'>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 30, right: 20, left: 0, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke='#ccc' />
              <XAxis dataKey="mes" />
              <YAxis
                label={{ value: 'kWh', angle: -90, position: 'insideLeft' }}
                domain={[100, 180]} // <-- ajusta límites Y
                tickCount={5}       // menos ticks, más centrado
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="consumo"
                stroke="#3b82f6"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <span className='flex justify-center text-sm text-gray-700'>
          Consumo de los 4 últimos meses
        </span>
      </main>
    </div>
  )
}
