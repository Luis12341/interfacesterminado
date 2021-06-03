import React from "react";
import Link from "next/link";

const Sidebar = () => {
    return (
        <aside className="w-3/12 h-full bg-gray-800 shadow-lg">
            <div className="p-5">
                <h2 className="text-white text-center font-bold text-3xl">
                    Estacionamiento
                </h2>
            </div>
            <nav className="p-5">
                <ul className="text-white">
                    <Link href="/">
                        <li className="text-lg cursor-pointer">Estacionamiento</li>
                    </Link>
                    <Link href="/vehiculos">
                        <li className="text-lg mt-2 cursor-pointer">Vehiculos</li>
                    </Link>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
