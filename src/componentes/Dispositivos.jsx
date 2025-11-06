import React from 'react';
import licuadora from "../imagenes/licuadora.png";
import microondas from "../imagenes/microondas.png";
import tv from "../imagenes/tv.png";
import foco from "../imagenes/foco.png";

export const Dispositivos = ({ setVista, setSeleccionado }) => {
  const dispositivos = [
    { nombre: "Licuadora", icon: licuadora, consumo: 25, estado: "encendido", consumoD: 0.24 },
    { nombre: "Microondas", icon: microondas, consumo: 27, estado: "apagado", consumoD: 0.27 },
    { nombre: "Televisor", icon: tv, consumo: 31, estado: "apagado", consumoD: 0.37 },
    { nombre: "Foco", icon: foco, consumo: 25, estado: "encendido", consumoD: 0.30 },
  ];

  const handleClick = (dispositivo) => {
    setSeleccionado(dispositivo);
    setVista("detalle");
  };

  return (
    <div className="overflow-hidden flex flex-col items-center mt-5">
      {dispositivos.map((dispositivo, index) => (
        <div
          key={index}
          onClick={() => handleClick(dispositivo)}
          className="relative flex w-[80%] justify-between border-2 rounded-md mb-5 p-3 cursor-pointer hover:bg-gray-800 transition"
        >
          <div>
            <span>{dispositivo.nombre}</span>
            <span><img src={dispositivo.icon} alt="" className="h-20" /></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] w-35 mb-2">
              Consumo al mes: <br /> <small>{dispositivo.consumo} kWh</small>
            </span>
            <span className="text-[12px]">
              Consumo diario: <br /> <small>{dispositivo.consumoD} kWh</small>
            </span>
          </div>
          <span className={`absolute bottom-1 right-3 text-[10px] ${dispositivo.estado === "encendido" ? "text-green-400" : "text-red-400"} `}>{dispositivo.estado}</span>
        </div>
      ))}
    </div>
  );
};
