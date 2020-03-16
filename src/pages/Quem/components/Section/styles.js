import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SectionImg = styled.div`
    padding: 0 !important;
    
    img {
        width: 100%;
        height: auto;
    }
`;

export const SectionText = styled.div`
    padding: 30px 80px !important;

    @media screen and (max-width: 790px) {
        padding: 30px 4vw !important;
    }

    p {
        color: #444;
        text-align: justify;
        font-size: 22px;
        line-height: 24px;

        svg {
            font-size: 24px;
            color: #b20710;
            align-self: middle;
        }
    }

    p.first {
        margin-bottom: 15px;
    }

    .divider {
        /* margin-top: 5px !important; */
        height: 4px;
        width: 20%;
        margin: 0 auto;
        background: #b20710;
        border-radius: 60px;
    }
    
    .col-6.missao, .col-6.visao{
        p {
            padding: 0 7px;
            margin-top: 5px;
            font-size: 18px;
            text-align: center;
        }

        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */

        img {
            width: 30%;
            height: auto;
        }
    
    }

    .col-12.valores {
        p {
            font-size: 18px;
        }

        
        display: flex;
        flex-direction: column;
        align-items: center;
        /* justify-content: center; */

        img {
            width: 15%;
            height: auto;
        }
    }


`;

export const Ul = styled.ul`
    display: flex;
    flex-flow: row wrap;
    list-style: none;
    margin: 5px auto;
    justify-content: center;

    li {
        color: #444;
        font-size: 18px;
        padding: 0 5px;

        svg {
            font-size: 12px;
            color: #b20710;
            margin-right: 5px;
        }
    }
`;