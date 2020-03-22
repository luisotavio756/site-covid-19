import styled from 'styled-components';
import Img from '../../../../assets/img/evento.webp';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 790px) {
        .order-reverse {
            flex-direction: column-reverse;
        }
    }
`;

export const SectionContainer = styled.div`
    margin: 0 auto;
    max-width: 1300px;
    padding: 4rem 4vw !important;

    & > div:not(:first-of-type) {
        margin-top: 40px;
    }

    .divider {
        margin: 0 !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    }

    .list-eventos {
        margin-top: 32px;
    }

    .button-more {
        margin-top: 15px;
        text-align: center;

        button {
            font-family: 'Product Sans';
            background: transparent;
            color:  #b20710;    
            border: none;
            cursor: pointer;

            padding: 10px 15px;
            border: 2px solid  #b20710;
            border-radius: 60px;

            font-size: 14px;
            font-weight: bold;

            transition: all 0.2s;

            &:hover {
                background: #b20710;
                color:  #fff; 
            }

        }
    }
`;

export const Ul = styled.ul`
    display: flex;
    flex-direction: row;

    list-style: none;

    li {
        padding: 0 15px 10px;
        /* background: cyan; */
        border-bottom: 4px solid transparent;
        color: #444;
        cursor: pointer;

        &.active {
            font-weight: bold;
            color: #222;
            border-bottom: 4px solid red;
        }
    }

    
`;

export const Card = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 30px 25px;
    border-radius: 10px;
    cursor: default;
    transition: all 0.3s linear;

    &:hover {
        .title .divider {
            width: 90%;
        }

        box-shadow: 5px 5px 15px 5px rgba(1, 1, 1, 0.1);
    }

    .title {
        font-weight: normal;
        text-align: center;
        color: #222;
        

        .divider {
            margin: 0 auto !important;
            width: 50%;
            height: 4px;
            border-radius: 60px;
            background: #b20710;
            transition: width 0.2s linear;
        }
    }

    .desc {
        text-align: justify;
        margin-top: 5px;
        color: #666;
    }

    .action {
        button {
            margin-top: 10px;
            width: 100%;
            font-family: 'Product Sans';
            background: #b20710;
            color:  #fff;    
            border: none;
            cursor: pointer;

            padding: 15px 20px;
            /* border: 2px solid  #b20710; */
            border-radius: 60px;

            font-size: 16px;
            font-weight: bold;

            transition: all 0.2s;

            &:hover {
                
            }
        }
    }

`;

export const Evento = styled.div`
    /* cursor: pointer; */
    &:not(:first-of-type) {
        margin-top: 30px;
    }
    .date {
        text-align: center;
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
        border: 1px solid rgba(0, 0, 0, 0.1);
        
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.2s;

        @media screen and (max-width: 790px) {
            flex-direction: column;

            .event, .about {
                width: 100% !important;
            }
        }

        &:hover {
            box-shadow: 0px 2px 6px 5px rgba(1, 1, 1, 0.1);

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
