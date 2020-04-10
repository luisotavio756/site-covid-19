import React, { useEffect, useState, useCallback } from "react";

// Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faTimesCircle,
    faCheckCircle,
    faSortAmountDown,
    faSortAmountUp,
    faSearch
} from "@fortawesome/free-solid-svg-icons";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { Row, FeedItem, Search } from "./styles";
import api from "../../../../../services/api";

export default function IKnow() {
    const [loading, setLoading] = useState(false);
    const [pageNow, setPage] = useState(1);
    const [feed, setFeed] = useState([]);
    const [total, setTotal] = useState(0);
    const [search, setSearch] = useState("");
    const [order, setOrder] = useState("");
    const [ count, setCount ] = useState(0);

    async function loadFeed(page = 1) {
        const { data } = await api.get(
            `/needies?page=${page}&order=${order}`
        );


        await setFeed(data.needies);
        setTotal(data.total);
        setPage(page);
        setLoading(false);

        if (page !== 1) window.location.href = "#feed";
    }

    // Recarrega a página de acordo com o loadFeed agora
    useEffect(() => {
        setLoading(true);
        setFeed([]);
        loadFeed();
        
        // alert('kkkk');
    }, [order]);


    function prevPage() {
        setLoading(true);
        loadFeed(pageNow - 1);
    }

    function nextPage() {
        setLoading(true);
        loadFeed(pageNow + 1);
    }

    return (
        <div id="feed" className="col-6 p-0" style={{ margin: "0 auto" }}>
            <Row>
                <div className="col-12 title">
                    <h4>
                        Aqui funciona um Feed de pessoas necessitadas, onde você
                        poderá ver e conhecer quem está precisando de ajuda
                    </h4>
                    <div className="divider"></div>
                </div>
            </Row>
            <Row>
                <Search>
                    <Row>
                        <div className="filters-search">
                            <div className="filters">
                                <button
                                    type="button"
                                    onClick={(e) => setOrder("DESC")}
                                >
                                    <FontAwesomeIcon icon={faSortAmountUp} style={{ marginRight: 3 }}/> Mais recentes
                                </button>{" "}
                                |{" "}
                                <button
                                    type="button"
                                    onClick={(e) => setOrder("ASC")}
                                >
                                    <FontAwesomeIcon icon={faSortAmountDown} style={{ marginRight: 3 }}/> Menos recentes
                                </button>
                            </div>
                            {/* <div className="input" onSubmit={(e) => e.preventDefault()}>
                                <div className="input-icon">
                                    <input
                                        type="text"
                                        placeholder="Pesquise por nome, cidade..."
                                        onChange={(e) => setSearch(e.target.value)}
                                        value={search}
                                    />
                                    <button disabled={search.length == 0} type="button" onClick={loadFeed(pageNow)}><FontAwesomeIcon icon={faSearch} /></button>
                                </div>
                            </div> */}
                        </div>
                    </Row>
                    <Row>
                        <div className="infos">
                            <div className="filters">
                                <span>Filtro ativo:</span>{" "}
                                {order === "ASC"
                                    ? "menos recentes"
                                    : "mais recentes"}
                            </div>
                            <div className="total">
                                Total: <span>{total}</span>
                            </div>
                        </div>
                    </Row>
                </Search>
            </Row>
            <Row>
                {loading && <div className="loader-more"></div>}
                
                {total === 0 && loading === false && (
                    <FeedItem>
                        <div className="info">
                            <h4 style={{ textAlign: "center" }}>
                                Nenhuma ajuda cadastrada. Você pode cadastrar em{" "}
                                <span>"Conheço alguem que precisa"</span> ou{" "}
                                <span>"Eu preciso"</span>
                            </h4>
                        </div>
                    </FeedItem>
                )}
                {feed.map((item) => (
                    <FeedItem key={item.needyName} className={item.status === 1 ? 'helped' : ''}>
                        <div className="info">
                            <h4>{item.needyName}</h4>
                            <p>
                                {item.city}, {item.address}, Nº {item.number}.{" "}
                                {item.referencePoint}
                            </p>
                        </div>
                        <div className="info">
                            <p>{item.description}</p>
                        </div>
                        <div className="info-group">
                            {item.phone && (
                                <div className="test">
                                    <h4>Telefone do Ajudante:</h4>
                                    <p>{item.phone}</p>
                                </div>
                            )}
                            {item.needyPhone && (
                                <div className="test">
                                    <h4>Telefone do Necessitado:</h4>
                                    <p>{item.needyPhone}</p>
                                </div>
                            )}
                        </div>
                        <div className="info subscribe">
                            {item.name && item.phone && (
                                <p>
                                    cadastrado por <span>{item.name}</span>
                                </p>
                            )}
                        </div>
                        {item.status === 1 && 
                            <div className="checked">
                                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: 3 }}/> Esta pessoa foi ajudada
                            </div> 
                        }
                    </FeedItem>
                ))}
                {total > 8 && loading === false && (
                    <div
                        className="col-12 p-0 pagination"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <button disabled={pageNow === 1} onClick={prevPage}>
                            <FontAwesomeIcon icon={faAngleDoubleLeft} />{" "}
                            Anterior
                        </button>
                        <button
                            disabled={pageNow > total / 8}
                            onClick={nextPage}
                        >
                            Proxima{" "}
                            <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
                        </button>
                    </div>
                )}
            </Row>
            {/* <Row style={{ marginTop: 10 }} >
                <div className="col-12 share">
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Ou</p>
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#666' }}>Entre em contato diretamento com nossos representantes no Whatsapp</p>
                    <a href="" >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
            </Row> */}
        </div>
    );
}
