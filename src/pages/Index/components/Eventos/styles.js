import styled from 'styled-components';
import Img from '../../../../assets/img/evento.webp';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    /* background-blend-mode: multiply; */

    /* background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
    background-size: cover; */
    
    /* min-height: 400px; */
    /* align-items: center; */
`;

export const SectionEventos = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    padding: 3rem 4vw !important;
    /* padding-top: 3rem !important;
    padding-bottom: 3rem !important; */

    .header {
        margin-bottom: 30px;

        @media screen and (max-width: 790px) { 
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .divider {
            width: 15%;
            background: #b20710;
            height: 4px;
            border-radius: 20px;
        }
    }

    .link {
        font-weight: bold;
        color: #333;
        text-align: end;
        transition: all 0.2s;
        margin-top: 30px;

        svg {
            vertical-align: middle;
        }

        .divider {
            width: 40%;
            background: #b20710;
            height: 2px;
            transition: width 0.2s linear;
        }

        &:hover {
            opacity: 0.8;

            .divider {
                width: 100%;
            }
            /* text-decoration: underline; */
        }
    }
`;

export const Evento = styled.div`
    /* cursor: pointer; */

    .date {
        /* display: flex; */
        /* flex-direction: column; */
        text-transform: uppercase;
        font-weight: bold;
        font-size: 14px;

        svg {
            font-size: 12px;
            color: #b20710;
            vertical-align: middle;
        }
    }

    @media screen and (max-width: 790px) { 
        &:not(:first-of-type){
            margin-top: 20px;
        }
    }   

    .card {
        cursor: pointer;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        /* border: 1px solid #999; */
        box-shadow: 0px 2px 6px 5px rgba(1, 1, 1, 0.1);
        border-radius: 10px;
        overflow: hidden;

        @media screen and (max-width: 790px) {
            flex-direction: column;

            .event, .about {
                width: 100% !important;
            }
        }

        &:hover {
            .event .divider {
                width: 100%;
            }
        }
        .event, .about {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .event {
            background-image: linear-gradient(#fff, #333), url(${Img});
            background-blend-mode: multiply;
            background-size: cover;
            background-position: center;
            width: 40%;
            padding: 30px 20px;
            background-color: #333;
            color: #fff;

            .title {
                text-transform: uppercase;
                font-size: 22px;
                font-weight: bold;
            }

            .divider {
                width: 40%;
                background: #b20710;
                height: 2px;
                transition: width 0.2s linear;
            }

            .hour {
                font-weight: bold;
                margin-top: 10px;
            }

            .duracao {
                margin-top: 5px;

                span {
                    font-weight: bold;
                    color: #b20710;
                }
            }
        }

        .about {
            padding: 20px 15px;
            width: 60%;

            .title {
                font-size: 22px;
                font-weight: bold;
            }

            .desc {
                color: #666;
            }
        }

    }

`;