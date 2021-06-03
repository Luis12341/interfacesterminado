import React from "react";
import Head from "next/head";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Estacionamiento</title>
            </Head>
            <div className="h-screen w-full flex">
                <Sidebar />
                <main className="h-full overflow-y-auto pb-5 flex-1 bg-gray-100">{children}</main>
            </div>
        </>
    );
};

export default Layout;
