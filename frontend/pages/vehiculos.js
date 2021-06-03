import { useQuery, gql } from "@apollo/client";
import AgregarVehiculo from "components/AgregarVehiculo";
import Layout from "components/Layout";
import TableVehiculos from "components/TableVehiculos";
import React, { useEffect } from "react";

const QUERY = gql`
    query obtenerVehiculos {
        obtenerVehiculos {
            id
            placa
            tipo
        }
    }
`;

const Vehiculos = () => {
    const { data, startPolling, stopPolling } = useQuery(QUERY);

    useEffect(() => {
        startPolling(1000);
        return () => {
            stopPolling();
        };
    }, [startPolling, stopPolling]);

    return (
        <Layout>
            <div className="px-5 py-5 border-gray-200 border-b mb-2 bg-white">
                <h1 className="text-gray-900 text-2xl font-semibold">
                    Vehiculos
                </h1>
            </div>
            <AgregarVehiculo />
            <div className="px-5 mt-3">
                {data && <TableVehiculos vehiculos={data.obtenerVehiculos} />}
            </div>
        </Layout>
    );
};

export default Vehiculos;
