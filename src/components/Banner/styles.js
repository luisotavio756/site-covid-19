import styled from 'styled-components';
import Img from '../../assets/img/banner.jpg';

export const BannerImg = styled.div`

    width: 100%;
    height: 100vh;
    
    background-image: linear-gradient(#fff, #333), url(${Img});
	background-blend-mode: multiply;
	/* filter: blur(1px); */
	/* Set a specific height */
	/* min-height: 100vh;  */
	

	/* Create the parallax scrolling effect */
	/* background-attachment: fixed; */
	background-position: center;
	background-repeat: no-repeat;
    background-size: cover;
    
    display: flex;
    align-items: flex-end;

    .text {
        /* position: absolute;
        left: 100px;
        top: 260px; */
        /* max-width: 700px; */
        padding: 60px 4vw;
        color: white;

        h1{
            /* text-align: justify; */
            font-size: 52px;
            font-weight: normal !important;
            letter-spacing: 1px;
            font-weight: normal;
            color: #cccccc;

            span {
                font-weight: bold !important;
                color: white !important;
                /* border-bottom: 6px solid #b20710; */
            }
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


`;