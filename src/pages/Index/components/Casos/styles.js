import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    &#fontes {
        margin-top: 10px;
        
        p {
            font-size: 15px; 
            line-height: 22px;
            color: #666;
            text-align: justify;

            span {
                font-weight: bold;
                color: #7e1bf0;
            }

            &.fontes {
               
                margin-top: 5px;

                span {
                    font-weight: bold;
                    color: #555;
                }

                a {
                    color: #7e1bf0;
                    transition: all 0.2s;
                    
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

export const Section = styled.div`
    margin: 0 auto;
    padding: 3rem 4vw !important;
    max-width: 1300px;

    #select {
        display: none;
    }

    .select {
        margin-top: 10px;
        width: 100%;
        display: flex;
        justify-content: center;

        select {
            font-family: 'Nunito', sans-serif;
            font-size: 18px;
            padding: 5px 10px;
            border-radius: 5px;
        }
    }

    @media screen and (max-width: 768px) {
        #select {
            display: block;
        }

        .mobile-reverse {
            h1 {
                font-size: 20px;
            }
            div:nth-child(1) {
                order: 2;
            }
            div:nth-child(2) {
                order: 1;
            }
            div:nth-child(3) {
                order: 3;
            }
        }
    }
`;

export const Details = styled.div`
    h1 {
        font-size: 30px;
    }
    div {
        margin-top: 1.5rem;
        h3 {
            font-size: 20px;
            font-weight: 300;
        }
        p {
            font-size: 24px;
            font-weight: bolder;
        }
        &.confirmed p {
            color: #4a148c;
        }
        &.deaths p {
            color: #303233;
        }
    }
`;

export const MapsContainer = styled.div`

    h1 {
        font-size: 30px;
        display: flex;
        justify-content: center;
    }
`;

export const Table = styled.div`
    display: flex;
    justify-content: center;

    table {
        width: 100%;
        margin-top: 20px;
        font-family: "Roboto";
        border-collapse: collapse;
        color: #222324;

        @media screen and (min-width: 768px) {
            thead,
            tbody {
                display: block;
            }
        }
        
        tbody {
            width: 100%;
            height: 385px;
            overflow-y: scroll;
        }

        tr {
            border-bottom: 1px solid #b6babf;
            
            th {
                width: 33.3% !important;
                font-size: 15px;
            }

            td {
                width: 85px !important;
                padding: 0.5rem;
                font-size: 13px;
            }
        }
        .text-right {
            text-align: right;
        }
    }
`;
