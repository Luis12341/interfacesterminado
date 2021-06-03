import Link from "next/link";
import React from "react";

const Vehiculo = ({ vehiculo, nombre, cedula, id, horaEntrada }) => {
    const entrada = new Date(parseInt(horaEntrada));

    // console.log()
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col">
                    <h4>
                        <strong>Nombre: </strong>
                        {nombre}
                    </h4>
                    <p>
                        <strong>Cedula: </strong>
                        {cedula}
                    </p>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <div>
                    <p>{vehiculo.placa}</p>
                </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {entrada.toLocaleString()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-900">
                    <p>{vehiculo.tipo}</p>
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link href={`/salida/${id}`}>
                    <a className="text-indigo-600 hover:text-indigo-900">
                        Registrar Salida
                    </a>
                </Link>
            </td>
        </tr>
    );
};

export default Vehiculo;
