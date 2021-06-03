import Layout from "components/Layout";
import React from "react";
import { useRouter } from "next/router";
import { gql, useQuery } from "@apollo/client";
import TableHistorial from "components/TableHistorial";

const query = gql`
    query obternerHistorialVehiculo($id: ID!) {
        obtenerHistorialVehiculo(id: $id) {
            vehiculo {
                id
                placa
                tipo
            }
            historial {
                id
                cedula
                nombre
                horaEntrada
                horaSalida
                montoPagado
            }
        }
    }
`;

const VehiculoPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { data } = useQuery(query, {
        variables: {
            id,
        },
    });

    if (!data) return null;

    const { vehiculo, historial } = data.obtenerHistorialVehiculo;

    return (
        <Layout>
            <div className="px-5 py-5 border-gray-200 border-b mb-2 bg-white">
                <h1 className="text-gray-900 text-2xl font-semibold">
                    Vehiculo
                </h1>
            </div>
            <div className="mx-5 p-5 mt-3 bg-white shadow-lg">
                <h2 className="text-2xl font-bold mb-3">Informacion del Vehiculo</h2>
                <h3>
                    <strong>Placa vehiculo:</strong> {vehiculo.placa}
                </h3>
                <h3>
                    <strong>Tipo de vehiculo:</strong> {vehiculo.tipo}
                </h3>
            </div>
            <div className="mx-5 mt-3">
                <TableHistorial historial={historial} />
            </div>
        </Layout>
    );
};

export default VehiculoPage;
