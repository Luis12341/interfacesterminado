import Vehiculo from "components/cards/Vehiculo";
import React from "react";

const clasesThead =
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

const TableEstacionamiento = ({ estacionamiento }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200 shadow-lg">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className={clasesThead}>
                        Conductor
                    </th>
                    <th scope="col" className={clasesThead}>
                        Placa
                    </th>
                    <th scope="col" className={clasesThead}>
                        Entrada
                    </th>
                    <th scope="col" className={clasesThead}>
                        Vehiculo
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {estacionamiento && estacionamiento.map(es => (
                    <Vehiculo key={es.id} id={es.id} vehiculo={es.vehiculo} cedula={es.cedula} horaEntrada={es.horaEntrada} nombre={es.nombre} />
                ))}
            </tbody>
        </table>
    );
};

export default TableEstacionamiento;
