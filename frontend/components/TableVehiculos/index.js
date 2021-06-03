import React from "react";
import Vehiculo from "./Vehiculo";

const clasesThead =
    "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";

const TableVehiculos = ({vehiculos}) => {
    return (
        <table className="min-w-full divide-y divide-gray-200 shadow-lg">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className={clasesThead}>
                        Placa
                    </th>
                    <th scope="col" className={clasesThead}>
                        Tipo
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {vehiculos &&
                    vehiculos.map((es) => (
                        <Vehiculo
                            key={es.id}
                            id={es.id}
                            placa={es.placa}
                            tipo={es.tipo}
                        />
                    ))}
            </tbody>
        </table>
    );
};

export default TableVehiculos;
