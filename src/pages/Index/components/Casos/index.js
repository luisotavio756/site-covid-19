import React from "react";

import { Row, Section, Details, MapsContainer, Table } from "./styles";

import Maps from "./Maps";

export default function Casos() {
    return (
        <Row id="cases">
            <Section className="col-12">
                <Row className="mobile-reverse">
                    <Details className="col-2">
                        <h1>Ceará</h1>
                        <div className="confirmed">
                            <h3>Confirmados</h3>
                            <p>182</p>
                        </div>
                        <div className="deaths">
                            <h3>Mortes</h3>
                            <p>0</p>
                        </div>
                    </Details>
                    <MapsContainer className="col-7">
                        <h1>Selecione um estado</h1>
                        <Maps />
                    </MapsContainer>
                    <Table className="col-3">
                        <table>
                            <thead>
                                <tr>
                                    <th>UF</th>
                                    <th className="text-right">Confirmados</th>
                                    <th className="text-right">Mortes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                                <tr>
                                    <td>Ceará</td>
                                    <td className="text-right">182</td>
                                    <td className="text-right">0</td>
                                </tr>
                            </tbody>
                        </table>
                    </Table>
                </Row>
            </Section>
        </Row>
    );
}
