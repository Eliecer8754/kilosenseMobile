import React from 'react'
import { IoMdHome } from "react-icons/io";

import { FaTv } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export const Footer = ({setSeccion}) => {
  const secciones = [{
    nombre: 'Inicio', icono: <IoMdHome size={30} />},
    {nombre: 'Dispositivos', icono: <FaTv size={30} />},
    {nombre: 'Perfil', icono: <FaUser size={30} />}]

  return (
    <footer className='flex h-[15vh] justify-around'>
      
      {secciones.map((seccion, index)=>(
          
          <div  onClick={() => setSeccion(seccion.nombre)} key={index} className='flex flex-col items-center justify-center text-xl px-7.5'>
            <span >{seccion.icono}</span>
            <span className='mt-1'>{seccion.nombre}</span>
          </div>

      ))}
    </footer>
  )
}

