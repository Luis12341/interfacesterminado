import React from "react";
import Historial from "./Historial";

const clasesThead =
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

const TableHistorial = ({historial}) => {
    return (
        <table className="min-w-full divide-y divide-gray-200 shadow-lg">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className={clasesThead}>
                        Conductor
                    </th>
                    <th scope="col" className={clasesThead}>
                        Cedula
                    </th>
                    <th scope="col" className={clasesThead}>
                        Entrada
                    </th>
                    <th scope="col" className={clasesThead}>
                        Salida
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {historial.map(es=>(
                    <Historial
                    key={es.id}
                    id={es.id}
                    horaSalida={es.horaSalida}
                    cedula={es.cedula}
                    horaEntrada={es.horaEntrada}
                    nombre={es.nombre}
                />
                ))}
            </tbody>
        </table>
    );
};

export default TableHistorial;
