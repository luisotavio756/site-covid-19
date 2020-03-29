import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    .content {
        margin: 30px auto;
    }

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
        text-align: center;
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


export const FormHelp = styled.form`
    margin: 15px auto;
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border-radius: 5px;
    padding: 15px;
    
    .section-form {
        h2 {
            color: #7d40e7;
        }
    }

    .section-form:not(:first-of-type) {
        margin-top: 15px;
    }
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

        input, textarea {
            margin-top: 5px;
            min-height: 42px;
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

        textarea {
            font-family: sans-serif;
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

    .alert { 
        padding: 15px 10px;
        /* border: 2px solid #7e1bf0; */
        /* color: #7e1bf0; */
        /* color: #fff; */
        border-radius: 5px;
        transition: all 0.2s linear;

        &.alert-success {
            color: #fff;
            background: rgb(4, 211, 97);
        }

        &.alert-danger {
            color: #fff;
            background: darkred;
        }
    }

`;