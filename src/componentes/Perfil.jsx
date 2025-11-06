import React from 'react'
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export const Perfil = () => {
  return (
    <div className="flex flex-col items-center mt-20 text-center">
      <FaUser size={170} className="text-gray-600" />
      <span className="mt-5 text-2xl font-semibold">Angel Ramos</span>

      {/* Información adicional */}
      <div className="mt-3 text-sm text-gray-700">
        <p className="flex items-center justify-center gap-2">
          <FaEnvelope /> angelramos@email.com
        </p>
        <p className="flex items-center justify-center gap-2 mt-1">
          <FaPhone /> +507 6000-0000
        </p>
        <p className="flex items-center justify-center gap-2 mt-1">
          <FaMapMarkerAlt /> Ciudad de Panamá
        </p>
        <p className="flex items-center justify-center gap-2 mt-1">
          <FaCalendarAlt /> Miembro desde 2023
        </p>
      </div>

      {/* Botón o acciones */}
      <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition">
        Editar perfil
      </button>
    </div>
  )
}
