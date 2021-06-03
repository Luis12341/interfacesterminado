import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { gql, useMutation } from "@apollo/client";
import * as Yup from "yup";

const agregarVehiculo = gql`
    mutation agregarVehiculo($input: InputVehiculo) {
        agregarVehiculo(input: $input) {
            id
        }
    }
`;

const AgregarVehiculo = () => {
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [agregar] = useMutation(agregarVehiculo);

    const form = useFormik({
        initialValues: {
            placa: "",
            tipo: "",
        },
        validationSchema: Yup.object({
            placa: Yup.string().required("La placa es requerida"),
            tipo: Yup.string().required("El tipo de vehiculo es requerido"),
        }),
        onSubmit: async (vals) => {
            try {
                const { data } = await agregar({
                    variables: {
                        input: vals,
                    },
                });
                if(data) {
                    form.resetForm()
                    setShowModal(false)
                }
                
            } catch (error) {
                setError(error.message)
            }
        },
    });

    const { values, handleSubmit, handleChange, errors, handleBlur } = form;

    return (
        <div className="px-5 mb-3">
            <button
                onClick={() => setShowModal(true)}
                className="px-5 py-2 bg-gray-800 text-white rounded-md"
            >
                <h3 className="text-md">Registrar Vehiculo</h3>
            </button>
            {showModal && (
                <div className="w-full min-h-screen absolute bg-opacity-40 bg-black top-0 left-0 flex justify-center items-center">
                    <div className="max-w-md w-full px-5 bg-white rounded-md p-5">
                        <div className="relative">
                            <h4 className="text-xl text-center">
                                Ingresar a Estacionamiento
                            </h4>
                            <span
                                onClick={() => setShowModal(false)}
                                className="absolute text-2xl right-0 -top-3 cursor-pointer"
                            >
                                x
                            </span>
                        </div>
                        <form onSubmit={handleSubmit} className="mt-3">
                            <input
                                type="text"
                                name="placa"
                                id="placa"
                                className="bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3"
                                placeholder="Placa"
                                value={values.placa}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <select
                                value={values.tipo}
                                className="bg-gray-100 focus:bg-white block w-full py-2 px-3 sm:text-sm border-gray-100 rounded-md text-base border outline-none mb-3"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Seleccione Tipo"
                                id="tipo"
                                name="tipo"
                            >
                                <option value="" disabled>
                                    Seleccione Tipo
                                </option>
                                <option value="CARRO">Carro</option>
                                <option value="MOTO">Moto</option>
                            </select>
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

export default AgregarVehiculo;
