import React from 'react'

const NumberVehicles = ({number, type}) => {
    return (
        <div className="bg-white shadow-lg max-w-xs py-6 px-8 rounded-md text-center">
            <p className="mb-2 text-xl">Numero de {type}</p>
            <span className="text-3xl">{number}</span>
        </div>
    )
}

export default NumberVehicles
