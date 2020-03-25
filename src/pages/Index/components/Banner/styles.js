import styled from 'styled-components';
import Img from '../../../../assets/img/banner.jpg';

export const BannerImg = styled.div`
    width: 100%;
    height: 400px;
    
    background-image: linear-gradient(#fff, #222), url(${Img});
    

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
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
            font-weight: 700 !important;
            color: #fff;

            span {
                font-weight: bold !important;
                color: white !important;
                /* border-bottom: 6px solid #b20710; */
            }

            .Typewriter__wrapper {
                color: #cccccc !important;
            }
        }

        p{
            font-weight: 300;
            margin-top: 30px;
            text-align: center;
            letter-spacing: 1px;
            color: #CED2D9 !important;
            font-size: 1.2rem;
        }


        @media screen and (max-width: 790px) {
            h1{
                font-size: 36px;
            }  
        } 
    }

    .cases {
        padding: 0 4vw;
        width: 100%;
        display: flex;
        flex-direction: row;

        .confirmed, .dealths {
            h1 {
                color: #fff;
                font-size: 20px;
            }

            width: 20%;
        }
    }

`;