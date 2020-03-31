import React, { useState, useEffect } from 'react';

// Import Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faHospital, faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Img from '../../../../assets/img/covid-table.jpeg';
import { Row, Section } from './styles';
import api from '../../../../services/api';

export default function Prevencoes() {
    const ufs = [
        {nome: "Acre", sigla: "AC"},
        {nome: "Alagoas", sigla: "AL"},
        {nome: "Amapá", sigla: "AP"},
        {nome: "Amazonas", sigla: "AM"},
        {nome: "Bahia", sigla: "BA"},
        {nome: "Ceará", sigla: "CE"},
        {nome: "Distrito Federal", sigla: "DF"},
        {nome: "Espírito Santo", sigla: "ES"},
        {nome: "Goiás", sigla: "GO"},
        {nome: "Maranhão", sigla: "MA"},
        {nome: "Mato Grosso", sigla: "MT"},
        {nome: "Mato Grosso do Sul", sigla: "MS"},
        {nome: "Minas Gerais", sigla: "MG"},
        {nome: "Pará", sigla: "PA"},
        {nome: "Paraíba", sigla: "PB"},
        {nome: "Paraná", sigla: "PR"},
        {nome: "Pernambuco", sigla: "PE"},
        {nome: "Piauí", sigla: "PI"},
        {nome: "Rio de Janeiro", sigla: "RJ"},
        {nome: "Rio Grande do Norte", sigla: "RN"},
        {nome: "Rio Grande do Sul", sigla: "RS"},
        {nome: "Rondônia", sigla: "RO"},
        {nome: "Roraima", sigla: "RR"},
        {nome: "Santa Catarina", sigla: "SC"},
        {nome: "São Paulo", sigla: "SP"},
        {nome: "Sergipe", sigla: "SE"},
        {nome: "Tocantins", sigla: "TO"}
    ];
    const [ ceCases, setCeCases ] = useState(0);
    const [ brCases, setBrCases ] = useState(0);
    const [ lastUpdated, setLast ] = useState('');

    useEffect(() => {
        async function currentState() {
            const  {data}   = await api.get(`/cases/ce`);
            setCeCases(data[0]);
    
            const  data2   = await api.get(`/cases/br`);
            setBrCases(data2.data[0]);

            const last_updated  = await api.get('/cases');
            setLast(last_updated.data[0].last_updated);


            // alert(JSON.stringify());
    
        }

        currentState()
    });

    
    
    function enviarMensagem(numero){
		var celular = numero;

        var texto = `*Vale contra o Coronavírus*\n\n💌 Ajude contra famílias carentes que estão passando necessidade devido a crise do Coronavírus\n\n📲 Entre em: https://coronainfobr.herokuapp.com/ajudar e faça sua doação ou cadastre alguem que precisa. Estamos juntos nessa.\n\nCasos coronavírus no Ceará e Brasil 🇧🇷\n🕐 Atualizado em ${lastUpdated}\n\n*Números Brasil*\n\n✅ ${brCases.confirmed} Confirmados\n💀 ${brCases.deaths} Mortes\n\n*Números Ceará*\n\n✅ ${ceCases.confirmed} Confirmados\n💀 ${ceCases.deaths} Mortes\n\n📊 Fonte: Ministério da Saúde e Secretarias de Saúde de todos os estados\nhttps://coronainfobr.herokuapp.com/\n⚠️ Evite fake news\n☢️ Sobre a doença\ncoronavirus.saude.gov.br/index.php/sobre-a-doenca`;

		texto = window.encodeURIComponent(texto);

		window.open("https://api.whatsapp.com/send?text=" + texto, "_blank");
		//Obs.. use "_system", no lugar de blank, caso você esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
	}

    return (
        <Row id="prevention">
            <Section className="col-12">
                <Row>
                    <div className="col-12 title">
                        <h1>Sobre o Covid-19</h1>
                        <div className="divider"></div>
                    </div>
                    <div className="col-12 info">
                        <h1>1. O que é o Covid-19(Coronavírus)?</h1>
                        <p>Os coronavírus são uma grande família viral, que causam infecções respiratórias em seres humanos e em animais. Em 80% dos casos, infecções por coronavírus causam doenças respiratórias leves a moderadas, semelhantes a um resfriado comum.</p>
                    </div>
                    <div className="col-12 info">
                        <h1>2. Como se prevenir contra o Covid-19?</h1>
                        <p>
                            As principais orientações são:
                        </p>
                        <p style={{ marginTop: 5}}>
                            a) Cobrir boca e nariz ao tossir ou espirrar;<br />
                            b) Usar um lenço de papel para cobrir boca e nariz ao tossir ou espirrar e descartá-lo no lixo após o uso;<br />
                            c) Higienizar as mãos com água e sabão ou álcool gel após tossir ou espirrar;<br />
                            d) Evitar tocar nos olhos, nariz e boca com as mãos não lavadas;<br />
                            e) Não compartilhar objetos de uso pessoal, como copo, talheres, etc.;<br />
                            f) Limpar e desinfetar objetos e superfícies tocados com frequência;<br />
                            g) Limpar regularmente o ambiente e mantê-lo ventilado;<br />
                            h) Lavar as mãos frequentemente por pelo menos 20 segundos (o tempo para cantar parabéns pra você! 2x) com água e sabão ou usar antisséptico de mãos à base de álcool quando a primeira opção não for possível;<br />
                            i) Evitar contato próximo com pessoas doentes;<br />
                            j) Quem viajar aos locais com circulação do vírus deve evitar contato com pessoas doentes, animais (vivos ou mortos), além de evitar a circulação em mercados de animais e seus produtos.<br />
                        </p>
                    </div>
                    <div className="col-12 info">
                        <h1>3. Quais os sintomas do Covid-19?</h1>
                        <p>
                            Os sinais e sintomas clínicos são principalmente respiratórios, semelhantes aos de um resfriado comum. Em casos mais graves, podem também causar infecção do trato respiratório inferior, como as pneumonias.
                        </p>
                        <img src={Img} alt=""/>
                        <p style={{ fontSize: 14, textAlign: "end" }}>Fonte: Secretaria de Saúde do Ceará</p>
                    </div>
                    <div className="col-12 info">
                        <h1>4. Internação ou isolamento domiciliar?</h1>
                        <p>
                            O isolamento domiciliar, assim como o distanciamento social, tem sido adotado conforme decreto do Governo do Ceará e recomendações da Secretaria Estadual de Saúde como medidas para evitar a propagação do vírus. Reforçam-se as recomendações de distanciamento social e redução da mobilidade das pessoas. Recomenda-se a todas as pessoas sair de casa apenas para atividades essenciais. Todas as pessoas com mais de 60 anos deverão evitar comparecimento ao trabalho ou demais ambientes fechados. Recomenda-se sair de casa apenas para atividades essenciais (mercado, farmácia serviços de saúde) que não possam ser realizadas por outra pessoa do domicílio/cuidador. Pessoas apresentando sintomas gripais e seus contatos domiciliares devem permanecer em isolamento domiciliar por 14 dias. Já a internação hospitalar ocorre somente em casos graves da doença.
                        </p>
                    </div>
                    <div className="col-12 info">
                        <h1>5. O que é transmissão comunitária?</h1>
                        <p>
                            É a ocorrência de casos sem vínculo a um caso confirmado, em área definida. Ou seja, é aquela que não é possível rastrear qual a origem da infecção, indicando que o vírus circula entre as pessoas independente de terem viajado ou não para o exterior.
                        </p>
                    </div>
                    <div className="col-12 info links">
                        <h1>6. Links úteis</h1>
                        <p>
                            <a href="https://unidades.saude.ce.gov.br/" target="_blank"><FontAwesomeIcon icon={faHospital} /> Unidades de Saúde do Ceará</a><br />
                            <a href="https://coronavirus.ceara.gov.br/boletins/" target="_blank"><FontAwesomeIcon icon={faBookMedical} /> Boletins da Secretaria de Saúde do Estado do Ceará</a><br/>
                            <a href="https://covid.saude.gov.br/" target="_blank"><FontAwesomeIcon icon={faChartArea} /> Painel Coronavírus - Ministério da Saúde</a>
                        </p>
                    </div>
                    <div className="col-12 info">
                        <p style={{ fontSize: 14, textAlign: "end" }}>Fonte: Secretária de Saúde Ceará | Escola de Saúde Pública do Ceará</p>
                    </div>
                    <div className="col-12 share">
                        <p>Compartilhe essas informações com seus amigos</p>
                        <a href="#" onClick={enviarMensagem}><FontAwesomeIcon icon={faWhatsapp} size="2x"/></a>
                    </div>
                </Row>
            </Section>
        </Row>
    );
}
