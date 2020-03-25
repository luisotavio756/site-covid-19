import styled from 'styled-components';
import Img from '../../../../assets/img/eventos-banner.jpg';
// import ImgMob from '../../../../assets/img/banner-quem-mob.jpg';

export const BannerImg = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    
    background-image: linear-gradient(#999, #222), url(${Img});
	background-blend-mode: multiply;
    
    /* */
    
	/* filter: blur(1px); */
	/* Set a specific height */
	/* min-height: 100vh;  */
	

	/* Create the parallax scrolling effect */
	/* background-attachment: fixed; */
	background-position: center;
	background-repeat: no-repeat;
    background-size: cover;
    
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
        /* position: absolute;
        left: 100px;
        top: 260px; */
        /* max-width: 700px; */
        color: white;
        
        h1{
            /* padding: 60px 4vw; */
            text-align: center;
            font-size: 52px;
            font-weight: bold !important;
            letter-spacing: 1px;
            font-weight: normal;
            color: #fff;

            
        }

        p{
            padding-left: 0 !important;
            padding-right: 0 !important;
            text-align: justify;
            letter-spacing: 1px;
            color: #999 !important;
            font-size: 1.2rem;
        }

        button{
            margin-top: 10px;
            /* height: 56px; */
            text-decoration: none;
            /* padding-left: 50px !important; */
        
            padding: 12px 36px;
            border: none !important;
            color:#eee !important;
            background-color: #b20710;
            font-size: 1.3rem;
            font-weight: normal;
            border-radius: 60px !important;
            cursor: pointer;
            transition: all 0.2s linear;

            &:hover {
                opacity: 0.9;
                box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
                
            }
            
        }

        @media screen and (max-width: 790px) {
            h1{
                font-size: 36px;
            }

            p {
                text-align: left;
                /* display: none; */
            }
            
            button {
                font-weight: bold !important;
                width: 100% !important;
            }
        }
    }

    a {
        position: absolute;
        bottom: 80px;
        color: #fff;

        span {
            position: absolute;
            top: 0;
            left: 50%;
            width: 24px;
            height: 24px;
            margin-left: -12px;
            border-left: 1px solid #fff;
            border-bottom: 1px solid #fff;
            -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
            -webkit-animation: sdb04 2s infinite;
            animation: sdb04 2s infinite;
            box-sizing: border-box;
        }

        @-webkit-keyframes sdb04 {
        0% {
            -webkit-transform: rotate(-45deg) translate(0, 0);
        }
        20% {
            -webkit-transform: rotate(-45deg) translate(-10px, 10px);
        }
        40% {
            -webkit-transform: rotate(-45deg) translate(0, 0);
        }
        }
        @keyframes sdb04 {
        0% {
            transform: rotate(-45deg) translate(0, 0);
        }
        20% {
            transform: rotate(-45deg) translate(-10px, 10px);
        }
        40% {
            transform: rotate(-45deg) translate(0, 0);
        }
        }
    }


`;