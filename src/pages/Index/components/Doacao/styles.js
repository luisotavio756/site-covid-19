import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Section = styled.div`
    margin: 0 auto;
    padding: 3rem 4vw !important;
    max-width: 1300px;


    .title {    
        margin-bottom: 30px;
        text-align: center;

        h1 {
            /* color: #7d40e7; */
            color: #222;
        }

        .divider {
            width: 20%;
            height: 4px;
            border-radius: 60px;
            margin: 0 auto;
            background: #4a148c;

        }
    }

    .info:not(:first-of-type) {
        margin-top: 20px;
    }

    .info {
        padding: 0 !important;

        h1 {
            color: #7e1bf0;
            font-size: 26px;
            font-weight: bold;
        }

        p {
            text-align: justify;
            margin-top: 5px;
            font-size: 16px;
            line-height: 22px;
            color: #666;
        }

        img {
            width: 100%;
            height: auto;
        }

        &.links {
            a {
                font-size: 14px;
                font-weight: bold;
                color: #7e1bf0;
                transition: all 0.2s;

                &:hover {
                    border-bottom: 2px solid #7e1bf0; 
                }
            }
        }
    }
`;