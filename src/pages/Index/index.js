import React, { useEffect } from "react";

import Banner from "./components/Banner";
import Casos from "./components/Casos";
import Prevencoes from "./components/Prevencoes";
import Doacao from './components/Doacao';

export default function Index() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <Banner />
            <Casos />
            <Prevencoes />
            <Doacao />
        </>
    );
}
