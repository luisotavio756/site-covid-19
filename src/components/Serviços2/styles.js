import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Section = styled.div`
    padding: 3rem 4vw !important;
    margin: 0 auto;
    max-width: 1300px;

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

    .desc {
        margin: 15px auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        @media screen and (max-width: 790px) { 
            text-align: center;
        }

        .text {

            p {
                color: #333;
                font-size: 19px;
                line-height: 24px;

                span {
                    font-size: 22px;
                    font-weight: bold;
                    color: #b20710;
                }
            }

            p:last-of-type {
                margin-top: 8px;
            }
        }

        a {
            margin: 10px auto;
            display: flex;
            align-items: center;
            justify-content: center;

            align-self: flex-end;
            max-width: 280px;
            background: #b20710;
            color: #fff;
            font-size: 18px;
            border-radius: 60px;
            padding: 10px 25px;
            
            transition: all 0.2s;

            &:hover {
                /* opacity: 0.95; */
                /* box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4); */
            }
        }
    }
`;

export const Img = styled.img`
    margin: 0 auto;
    width: 20%;
    height: auto;

    @media screen and (max-width: 790px) { 
        width: 75%;
    }
`;