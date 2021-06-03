import { useQuery, gql } from "@apollo/client";
import AgregarVehiculos from "components/AgregarVehiculos";
import NumberVehicles from "components/cards/NumberVehicles";
import TableEstacionamiento from "components/TableEstacionamiento";
import { useEffect } from "react";
import Layout from "../components/Layout";

const QUERY = gql`
    query obternerCantidadPuestos {
        obtenerCantidadPuestos {
            carros
            motos
        }
    }
`;
const QUERY2 = gql`
    query obternerCantidadPuestos {
        obtenerVehiculosEstacionados {
            id
            cedula
            nombre
            horaEntrada
            vehiculo {
                id
                placa
                tipo
            }
        }
    }
`;

export default function Home() {
    const { data, startPolling, stopPolling } = useQuery(QUERY);
    const { data: estacionamiento, startPolling:startPolling2, stopPolling:stopPolling2 } = useQuery(QUERY2);

    useEffect(() => {
        startPolling(1000)
        startPolling2(1000)
        return () => {
            stopPolling()
            stopPolling2()
        }
    }, [startPolling,startPolling2,stopPolling,stopPolling2])


    return (
        <Layout>
            <div className="px-5 py-5 border-gray-200 border-b mb-2 bg-white">
                <h1 className="text-gray-900 text-2xl font-semibold">
                    Estacionamiento
                </h1>
            </div>
            <AgregarVehiculos />
            {data && (
                <div className="grid grid-cols-2 w-full gap-5 px-5 justify-items-center text-gray-900">
                    <NumberVehicles
                        type="carros"
                        number={data.obtenerCantidadPuestos.carros}
                    />
                    <NumberVehicles
                        type="motos"
                        number={data.obtenerCantidadPuestos.motos}
                    />
                </div>
            )}
            <div className="w-full px-5 mt-3">
                <h3 className="text-gray-900 text-2xl text-center">
                    Vehiculos Estacionados
                </h3>
                <div className="mt-4">
                    {estacionamiento && <TableEstacionamiento
                        estacionamiento={
                            estacionamiento.obtenerVehiculosEstacionados
                        }
                    />}
                </div>
            </div>
        </Layout>
    );
}
