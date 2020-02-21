import styled from 'styled-components';
import Img from '../../assets/img/parallax.jpg';

export const Card = styled.div`
    width: 33.3%;
    padding: 10px 15px;
    transition: transform 0.2s linear;
    /* cursor: pointer; */
    border: 2px solid transparent;
    /* width: ${props => props.cursos ? "100%" : "initial"}; */

    @media (max-width: 768px) {
        width: 100%;
    }
    
    &:hover {
        transform: scale(1.09);
        cursor: pointer;
        /* border: 2px solid #E5E6F0; */
        transition: all 0.3s linear; 
    }

    .img {
        text-align: center;
        color: #fff;
        margin-top: 10px;
    }

    .title{
        color: #fff;
        width: 100%;
        text-align: center;
        margin-top: 15px;
    }

    .title h1{
        letter-spacing: 2px;
        font-weight: normal;
    }

    .desc {
        text-align: justify;
        color: #999;
        margin-top: 5px;
        font-size: 1rem;
        /* overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical; */
    }

    .divider {
        /* display: none; */
        margin: 5px auto;
        background-color: #b20710;
        width: 40%;
        height: 2px;
        border-radius: 60px;
        transition: width 0.2s linear;
        /* text-align: center; */
    }

    .icon {
        display: none;
        text-align: center;
        margin: 5px auto;
        color: white;
        
    }

    &:hover .divider {
        width: 75%;
    }
`;

// Card.defaultProps = {
//     cursos: {
//         hover: false,
//         display: true
//     }
// };
  

export const ContainerSection = styled.div`
    max-width: 997px;
    margin: auto auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

export const Background = styled.div`
    background-image: linear-gradient(#fff, #333), url(${Img});
	background-blend-mode: multiply;

	height: auto;

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
    padding: 3rem 0;
    transition: all 3s linear;

`;