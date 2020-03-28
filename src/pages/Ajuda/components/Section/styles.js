import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    .content {
        margin: 30px auto;
    }

    @media screen and (min-width: 790px) {
        #title-menu {
            display: none
        }
    }   

    /* background: #f0f0f5; */
    background: #E5E6F0;
`;

export const SectionContainer = styled.div`
    margin: 0 auto;
    width: 1300px;
    padding: 3rem 4vw !important;
    

    .share{ 
        display: flex;
        flex-direction: column;
        align-items: center;
        
        a {
            svg {
                font-size: 24px;
            }

            background: #25d366;
            margin-top: 5px;
            padding: 4px 8px;
            /* border: 1px solid green; */
            border-radius: 5px;
            color: white;
        }
    }

    .title {
        padding: 0 !important;

        h4 {
            color: #666;
        }

        .divider {
            margin: 5px auto;
            width: 20%;
            height: 4px;
            border-radius: 60px;
            background: #7d40e7;
        }

    }
`;

export const Ul = styled.ul`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    list-style: none;

    @media screen and (max-width: 790px) {
        width: 100%;
        flex-direction: column;
        /* border: 0px 1px 0px 1px solid #999; */
        border-radius: 5px;

        li {
            padding: 15px 10px !important;
            &.active {
                border: none !important;
                border-radius: 5px;
                background: #7d40e7;
                color: #fff !important;
            }
        }
    }

    li {
        padding: 0 15px 10px;
        /* background: cyan; */
        border-bottom: 4px solid transparent;
        color: #444;
        cursor: pointer;
        transition: all 0.2s linear;
        
        &.active {
            font-weight: bold;
            color: #222;
            border-bottom: 4px solid #7d40e7;
        }
    }

    

    
`;

export const FormHelp = styled.form`
    margin: 15px auto;

    .input-block:not(:first-of-type) {
        margin-top: 15px;
    }

    .input-block {
        display: flex;
        flex-direction: column;

        label {
            font-size: 16px;
            font-weight: bold;
            color: #444;
        }

        input {
            margin-top: 5px;
            height: 42px;
            font-size: 14px;
            color: rgb(102, 102, 102);
            border: 1px solid #999;
            padding: 5px 12px;
            border-radius: 3px;
            transition: all 0.2s;

            &:focus {
                border-color: #5f04c8;
            }
        }

        p {
            margin-top: 3px;
            font-size: 12px;
            color: rgb(153, 153, 153);
        }

    }

    button {
        font-family: 'Nunito', sans-serif;
        cursor: pointer;
        margin-top: 15px;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        background: #7e1bf0;
        color: #fff;
        border: none;
        border-radius: 5px;
        padding: 15px 20px;
        transition: all 0.2s;
        
        &:hover {
            background: #5f04c8;
        }
    }

`;