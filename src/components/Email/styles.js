import styled from 'styled-components';
import Banner from '../../assets/img/email.jpg';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    /* background-color: #b20710; */
    background-image: linear-gradient(#333, #000), url(${Banner});
    background-blend-mode: multiply;

    background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
    background-size: cover;
    
    /* min-height: 400px; */
    align-items: center;
`;

export const ContainerSection = styled.div`
    margin: 0 auto;
    max-width: 1100px;
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;

    .title {
        color: #fff;
        width: 100%;
        text-align: center;
    }

    .title p {
        margin: 5px 0;
        color: #999;
    }

    .divider {
        margin: 3px auto;
        height: 4px;
        background-color: #b20710;
        width: 30%;
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

export const Card = styled.div`
    width: 100%;
    display: flex;

    /* align-items: center; */
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;

        .form {
            margin-top: 20px;
        }
    }
    
    .icon {
        /* width: 30%; */
        padding: 0 15px;
        display: flex;
        justify-content: flex-end;

        img {
            width: 100%;
            height: auto;
            filter: invert(1);
        }
        /* background: #000; */
    }

    .form {
        /* width: 70%; */
        padding: 0 15px;

        h1 {
            color: #fff;
        }

        p {
            color: #999;
        }

        form {
            margin-top: 10px;
            position: relative;
        }

        form input {
            width: 100%;
            height: 42px;
            border: none;
            padding: 5px 12px;
            font-size: 14px;
            color: rgb(102, 102, 102);
            border-radius: 3px;
        }

        form button {
            background: transparent;
            border: none;
            padding: 0 !important;
            position: absolute;
            right: 15px;
            top: 10px;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                opacity: 0.9;
            }
        }

        form svg {
            font-size: 20px;
            /* position: absolute; */
            color: #0d0e0f;
            /* right: 15px;
            top: 13px; */
        }
        /* background: red; */
    }
`;

export const Item = styled.a`
    display: flex;
    align-items: center;
    margin: 5px;
    justify-content: center;
    width: 40%;
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
        box-shadow: 3px 3px 10px #333;
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
        text-align: end;
        /* display: flex; */
        /* align-items: center; */
    }

    .link p{
        font-size: 14px;
        font-weight: bold;
        color: #eee;
    }
`;