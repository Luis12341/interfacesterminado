import Layout from "components/Layout";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gql, useMutation, useQuery } from "@apollo/client";
import MostrarSalida from "components/cards/MostrarSalida";
import Link from "next/link";

const query = gql`
    query obtenerVehiculoEstacionado($id: ID!) {
        obtenerVehiculoEstacionado(id: $id) {
            cedula
            nombre
            horaEntrada
            horaSalida
            montoPagado
            vehiculo {
                placa
                tipo
            }
        }
    }
`;
const mutation = gql`
    mutation salidaEstacionamiento($id: ID!) {
        salidaEstacionamiento(id: $id) {
            cedula
            nombre
            horaEntrada
            horaSalida
            montoPagado
            vehiculo {
                placa
                tipo
            }
        }
    }
`;

const SalidaPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [salida, setSalida] = useState(null);
    const [registrarSalida] = useMutation(mutation);

    const { data } = useQuery(query, {
        variables: {
            id,
        },
    });

    useEffect(() => {
        if (data.obtenerVehiculoEstacionado.horaSalida) {
            setSalida(data.obtenerVehiculoEstacionado);
        }
    }, [data]);

    if (!data) return null;
    // console.log(data)
    const { vehiculo, cedula, nombre, horaEntrada, horaSalida } =
        data.obtenerVehiculoEstacionado;

    const salidaVehiculo = async () => {
        const { data } = await registrarSalida({
            variables: {
                id,
            },
        });
        if (data) {
            setSalida(data.salidaEstacionamiento);
        }
    };

    return (
        <Layout>
            <div className="px-5 py-5 border-gray-200 border-b mb-2 bg-white">
                <h1 className="text-gray-900 text-2xl font-semibold">
                    Registrar Salida
                </h1>
            </div>
            <div className="mx-5 p-5 mt-3 bg-white shadow-lg">
                <h2 className="text-2xl font-bold mb-3">
                    Informacion del Vehiculo
                </h2>
                {salida ? (
                    <>
                        <MostrarSalida
                            cedula={salida.cedula}
                            nombre={salida.nombre}
                            horaEntrada={salida.horaEntrada}
                            horaSalida={salida.horaEntrada}
                            vehiculo={salida.vehiculo}
                            montoPagado={salida.montoPagado}
                        />
                        <Link href="/">
                            <button className="mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block">
                                Volver a Estacionamiento
                            </button>
                        </Link>
                    </>
                ) : (
                    <>
                        <MostrarSalida
                            cedula={cedula}
                            nombre={nombre}
                            horaEntrada={horaEntrada}
                            vehiculo={vehiculo}
                        />
                        <button
                            onClick={salidaVehiculo}
                            className="mt-3 px-3 py-2 bg-gray-800 text-white rounded-md block"
                        >
                            Aceptar salida
                        </button>
                    </>
                )}
            </div>
        </Layout>
    );
};

export default SalidaPage;
