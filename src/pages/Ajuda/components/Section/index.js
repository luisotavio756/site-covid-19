import React, { useEffect, useState } from "react";

import { Row, SectionContainer, Ul } from "./styles";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faLock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// Import Components
import Form from "./Form";
import IKnow from "./IKnow";
import Feed from "./Feed";
import INeed from "./INeed";

const array = [
    {
        id: "form",
        name: "Posso Ajudar",
        status: 1,
    },
    {
        id: "feed",
        name: "Feed de Ajuda",
        status: 0,
    },
    {
        id: "iknow",
        name: "Conheço alguem que precisa",
        status: 0,
    },
    {
        id: "ineed",
        name: "Eu preciso !",
        status: 0,
    },
];

export default function Section() {
    const [loading, setLoading] = useState(false);
    const [itens, setItens] = useState([]);
    const [content, setContent] = useState();

    useEffect(() => {
        async function setTab() {
            await setContent(array[0].id);
            setItens(array);
        }

        setTab();
    }, []);

    function handleNav(name) {
        array.forEach((element) => {
            element.status = 0;
            if (element.name === name) element.status = 1;
        });

        // alert(JSON.stringify(array));
        var aux = array.filter((item) => item.status === 1);

        // alert(JSON.stringify(aux[0].id));
        setItens(array);
        setContent("");
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setContent(aux[0].id);
        }, 300);

        // ;
        // alert()
    }

    function enviarMensagem(numero) {
        var celular = numero;

        var texto = `*Vale contra o Coronavírus*\n\n💌 Ajude famílias carentes que estão passando necessidade devido a crise do Coronavírus\n\n📲 Entre em: https://coronainfobr.herokuapp.com/ajudar e faça sua doação ou cadastre alguem que precisa. Estamos juntos nessa.\n\n⚠️ Evite fake news\n☢️ Sobre a doença\ncoronavirus.saude.gov.br/index.php/sobre-a-doenca`;

        texto = window.encodeURIComponent(texto);

        window.open("https://api.whatsapp.com/send?text=" + texto, "_blank");
        //Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
    }

    return (
        <Row>
            <SectionContainer className="col-12">
                <Row>
                    <div className="col-12 share-wpp">
                        <h4>
                            Não pode ajudar ?<br />
                            <a href="#" onClick={enviarMensagem}>
                                <FontAwesomeIcon icon={faWhatsapp} />{" "}
                                Compartilhe no WhatsApp com seus amigos
                            </a>
                        </h4>
                    </div>
                    <div className="col-12 p-0">
                        <h2
                            id="title-menu"
                            style={{ textAlign: "center", marginBottom: 5 }}
                        >
                            Menu
                        </h2>
                        <div
                            className="nav"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Ul>
                                {itens.map((item) => (
                                    <li
                                        key={item.name}
                                        className={item.status ? "active" : ""}
                                        onClick={() => handleNav(item.name)}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                            </Ul>
                        </div>
                    </div>
                    <div id="content" className="col-12 content p-0">
                        <Row>
                            {loading && <div className="loader-more"></div>}
                            {content === "" && ""}
                            {content === "form" && <Form />}
                            {content === "iknow" && <IKnow />}
                            {content === "ineed" && <INeed />}
                            {content === "feed" && <Feed />}
                        </Row>
                    </div>
                </Row>
            </SectionContainer>
        </Row>
    );
}
