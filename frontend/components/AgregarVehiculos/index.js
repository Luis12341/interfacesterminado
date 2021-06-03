import React, { useState, useEffect } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";
import Select from "react-select";
import { useFormik } from "formik";
import * as Yup from "yup";

const getVehicles = gql`
    query obtenerVehiculos {
        obtenerVehiculos {
            id
            placa
            tipo
        }
    }
`;
const agregarEstacionamiento = gql`
    mutation entradaEstacionamiento($input: InputEstacionamiento) {
        entradaEstacionamiento(input: $input) {
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

const AgregarVehiculos = () => {
    const [vehiculo, setVehiculo] = useState(null);
    const [vehiculos, setVehiculos] = useState([]);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const { data } = useQuery(getVehicles);
    const [agregar] = useMutation(agregarEstacionamiento);

    useEffect(() => {
        if (data) {
            const collectVehicles = data.obtenerVehiculos.map((veh) => {
                return {
                    value: veh.id,
                    label: veh.placa,
                };
            });
            setVehiculos(collectVehicles);
        }
    }, [data]);
    // console.log(vehiculos);
    const form = useFormik({
        initialValues: {
            nombre: "",
            cedula: "",
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("El nombre es requerido"),
            cedula: Yup.string()
                .min(8, "Esta campo admite 8 caracteres")
                .required("La cedula es requeria"),
        }),
        onSubmit: async (vals) => {
            if (vehiculo) {
                vals.vehiculo = vehiculo;
                const { data } = await agregar({
                    variables: {
                        input: vals,
                    },
                });
                if (data) {
                    form.resetForm();
                    setShowModal(false);
                }
            }
            setError("Elija un vehiculo");
        },
    });

    const { values, handleSubmit, handleChange, errors, handleBlur } = form;
    // console.log(errors);
    return (
        <div className="px-5 mb-3">
            <button
                className="px-5 py-2 bg-gray-800 text-white rounded-md"
                onClick={() => setShowModal(true)}
            >
                <h3 className="text-md">Ingresar Vehiculo</h3>
            </button>
            {showModal && (
                <div className="w-full min-h-screen absolute bg-opacity-40 bg-black top-0 left-0 flex justify-center items-center">
                    <div className="max-w-md w-full px-5 bg-white rounded-md p-5">
                        <div className="relative">
                            <h4 className="text-xl text-center">
                                Ingresar a Estacionamiento
                            </h4>
                            <span onClick={() => setShowModal(false)} className="absolute text-2xl right-0 -top-3 cursor-pointer">x</span>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-3">
                            <input
                                type="text"
                                name="cedula"
                                id="cedula"
                                className="bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3"
                                placeholder="Cedula"
                                value={values.cedula}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <input
                                type="text"
                                name="nombre"
                                id="nombre"
                                className="bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3"
                                placeholder="Nombre"
                                value={values.nombre}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <Select
                                className="bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3"
                                options={vehiculos}
                                onChange={(e) => setVehiculo(e.value)}
                                onBlur={handleBlur}
                                placeholder="Vehiculo"
                                name="vehiculo"
                                id="vehiculo"
                            />
                            <input
                                type="submit"
                                value="Ingresar Vehiculo"
                                className="px-3 py-2 bg-gray-800 mx-auto text-white rounded-md block"
                            />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AgregarVehiculos;
