import styled from 'styled-components';

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
`;

export const SectionImg = styled.div`
    /* display: flex; */
    /* flex-flow: nowrap wrap  ; */
    position: relative;
    padding: 0 !important;
    margin-top: 0 !important;
    /* display: flex; */
    /* flex-flow: wrap; */

    img {
        /* flex: 1; */
        width: 100%;
        height: auto;
        /* border-radius: 5px; */
    }

    .fade {
        position: absolute;
        bottom: 0px;
        /* left: 20px; */
        padding: 0 0 20px 20px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.1) 100%);

        h1 {
            font-size: 26px;
            font-weight: normal;
            color: #fff;
        }

        .divider {
            margin-top: 3px;
            height: 3px;
            width: 30%;
            /* margin: 0 auto; */
            background: #b20710;
            border-radius: 60px;
        }
    }
`;

export const SectionText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* padding: 30px 80px !important; */

    /* @media screen and (max-width: 790px) {
        padding: 30px 4vw !important;
    } */

    p {
        font-family: 'Product Sans Light';
        font-weight: normal;
        color: #444;
        /* text-align: justify; */
        font-size: 20px;
        line-height: 24px;

        svg {
            font-size: 24px;
            color: #b20710;
            align-self: middle;
        }
    }

    @media screen and (max-width: 790px) {
        padding: 0 !important;

        p {
            text-align: justify;
        }
    }

    
`;
