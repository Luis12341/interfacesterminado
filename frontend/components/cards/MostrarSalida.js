import React from "react";

const MostrarSalida = ({
    cedula,
    nombre,
    horaEntrada,
    horaSalida,
    montoPagado,
    vehiculo,
}) => {
    return (
        <div>
            <p className="text-base block">
                <strong>Cedula:</strong> {cedula}
            </p>
            <p className="text-base block">
                <strong>Nombre:</strong> 
                {nombre}
            </p>
            <p className="text-base block">
                <strong>Placa:</strong> 
                {vehiculo.placa}
            </p>
            <p className="text-base block">
                <strong>Tipo Vehiculo:</strong> 
                {vehiculo.tipo}
            </p>
            <p className="text-base block">
                <strong>Hora Entrada:</strong> 
                {horaEntrada}
            </p>
            {horaSalida && (
                <p className="text-base block">
                    <strong>Hora Salida:</strong> 
                    {horaSalida}
                </p>
            )}
            {montoPagado && (
                <p className="text-base block">
                    <strong>Monto Pagado:</strong> 
                    {montoPagado}$
                </p>
            )}
        </div>
    );
};

export default MostrarSalida;
