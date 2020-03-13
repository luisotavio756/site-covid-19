import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    min-height: 60px;
    background-color: #0d0e0f;

    .logo-text {

        @media screen and (max-width: 790px) { 
            .img {
                text-align: center;
            }
        }
        .content {
            margin-top: 25px;

            p {
                font-size: 16px;
                line-height: 23px;
                color: #999;
                font-weight: normal;
            }
        }

        .social {
            margin-top: 25px;
            color: #999;
            display: flex;
            align-items: center;
            

            svg {
                transition: all 0.2s;
                font-size: 18px !important;
                
                &:first-of-type {
                    margin-right: 25px;
                }

                &:hover {
                    color: #fff;
                }
            }
        }
    }

    .menu {
        /* padding-top: 30px !important; */
        .content {
            margin-top: 30px;
        }

        h1 {
            font-weight: normal;
            color: #eee;
        }
    }

    .contato {

        .content {
            margin-top: 30px;
        }

        h1 {
            font-weight: normal;
            color: #eee;
        }
    }

    .col-12 {
        margin-top: 35px;
        
        .divider {
            width: 100%;
            height: 1px;
            background-color: rgba(255, 255, 255, 0.2);
            margin-bottom: 25px;
        }
    }

`;

export const Text = styled.div`
    &:not(:first-of-type) {
        margin-top: 10px;
    }
    /* margin-top: 10px; */
    font-size: 15px;
    color: #999;
    font-weight: normal;
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
        color: #fff;
    }
`;

export const Section = styled.div`
    padding: ${props => props.type == 0 ? '6rem 4vw 2rem' : '0'} !important;
    margin: 0 auto;
    max-width: 1300px;
    width: 100%;

    display: ${props => props.type == 1 ? 'flex' : ''};
    align-items: ${props => props.type == 1 ? 'center' : ''};
    justify-content: ${props => props.type == 1 ? 'center' : ''};

    p {
        text-align: ${props => props.type == 1 ? 'center' : ''};
        color: ${props => props.type == 1 ? '#999' : ''};
    }

    .social {
        color: ${props => props.type == 1 ? 'white' : ''};
        display: ${props => props.type == 1 ? 'flex' : ''};
        align-items: ${props => props.type == 1 ? 'center' : ''};
        justify-content: ${props => props.type == 1 ? 'space-around' : ''};

        svg {
            font-size: ${props => props.type == 1 ? '18px !important' : ''};
            margin: ${props => props.type == 1 ? '0 7px' : ''};
        }
    }

    @media screen and (max-width: 790px) { 
        flex-direction: ${props => props.type == 1 ? 'column' : ''};
        align-items: ${props => props.type == 1 ? 'center' : ''};
    }

`;

export const Menu = styled.ul` 
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
        padding: 4px 0;
    }

    a {
        color: #999;
        /* font-weight: bold; */
        transition: all 0.2s;
        /* text-transform: uppercase; */

        &:hover {
            color: #fff;
        }
    }
`;



