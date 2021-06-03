import Link from "next/link";
import React from "react";

const Vehiculo = ({ tipo, placa, id }) => {
    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">{placa}</td>
            <td className="px-6 py-4 whitespace-nowrap">{tipo}</td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link href={`/vehiculos/${id}`}>
                    <a className="text-indigo-600 hover:text-indigo-900">
                        Ver Historial
                    </a>
                </Link>
            </td>
        </tr>
    );
};

export default Vehiculo;
