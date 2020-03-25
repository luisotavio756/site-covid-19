import React from "react";

import Banner from "./components/Banner";
import Casos from "./components/Casos";
import Prevencoes from "./components/Prevencoes";

export default function Index() {
    return (
        <>
            <Banner />
            <Casos />
            <Prevencoes />
        </>
    );
}
