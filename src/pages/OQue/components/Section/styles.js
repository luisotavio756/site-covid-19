import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const SectionImg = styled.div`
    padding: 0 !important;
    margin-top: 0 !important;
    display: flex;
    flex-flow: wrap;

    img {
        flex: 1;
        width: 100%;
        height: 100%;
    }
`;

export const SectionText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 30px 80px !important;

    @media screen and (max-width: 790px) {
        padding: 30px 4vw !important;
    }

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

    p:not(:last-of-type) {
        margin-bottom: 18px;
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
            @media screen and (max-width: 790px) {
                width: 30%;
            }

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

export const ContainerSection = styled.div`
    margin: 0 auto;
    width: 100%;
    padding: 2rem 0 !important;
    /* padding-top: 3rem !important;
    padding-bottom: 3rem !important; */

    .title {
        color: #333;
        width: 100%;
        text-align: center;
    }

    .title p {
        margin: 5px 0;
        color: #666;
    }

    .divider {
        margin: 3px auto;
        height: 4px;
        background-color: #b20710;
        width: 10%;
        border-radius: 60px;
    }

`;

export const Img = styled.img`
    width: 80%;
    height: auto;
    /* opacity: 0.5; */
    transition: all 0.2s linear;
    filter: brightness(0) invert(1);

    &:hover {
        opacity: 1;
    }
`;

export const Itens = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Item = styled.a`
    /* flex: 1; */
    display: flex;
    align-items: center;
    margin: 5px;
    justify-content: space-between;
    width: 100%;
    height: 90px !important;
    background-color: #b20710;
    border-radius: 10px;
    padding: 10px;
    height: 100%;
    flex-direction: row;
    transition: all 0.2s linear;

    @media (max-width: 768px) {
        width: 100%;
    }

    &:hover {
        cursor: pointer;
        /* opacity: 0.9; */
        transform: scale(1.01);
        box-shadow: 3px 3px 10px #999;
    }

    /* &:hover .link {
        opacity: 1;
        height: 20px;
    } */

    .img {
        width: 50%;
        text-align: center;
    }

    .link {
        width: 50%;
        text-align: end !important;
        /* display: flex; */
        /* align-items: center; */
    }

    .link p{
        font-size: 14px;
        font-weight: bold;
        color: #eee;
    }
`;