import React from "react";

const Historial = ({ nombre, horaEntrada, horaSalida, cedula }) => {
    const horaE = new Date(parseInt(horaEntrada))
    const horaS = new Date(parseInt(horaSalida))
    return (
        <tr>
            <td className="px-6 py-4">{nombre}</td>
            <td className="px-6 py-4">{cedula}</td>
            <td className="px-6 py-4">
                {horaE.toLocaleString()}
            </td>
            <td className="px-6 py-4">
                { horaSalida && horaS.toLocaleDateString()}      
            </td>
        </tr>
    );
};

export default Historial;
