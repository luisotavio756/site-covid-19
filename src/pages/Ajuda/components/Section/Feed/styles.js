import styled from "styled-components";

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    .content {
        margin: 30px auto;
    }

    .share {
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

    .pagination {
        margin-top: 15px;

        button {
            cursor: pointer;
            font-family: "Nunito";
            border: none;
            font-weight: bold;
            background: #7e1bf0;
            color: #fff;
            border-radius: 10px;
            padding: 8px 16px;
            transition: all 0.2s;

            &:hover {
                background: #5f04c8;
            }

            &:disabled {
                opacity: 0.6;
            }
        }
    }
`;

export const Search = styled.div`
    width: 100%;
    margin-top: 15px;

    .filters-search,
    .infos {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .filters-search {
        .filters {
            font-weight: bold;
            font-size: 14px;
            text-align: center;
            color: #333;
        }

        .input {
            .input-icon {
                position: relative;
            }

            button {
                cursor: pointer;
                background: #5f04c8;
                padding: 5px 10px;
                border: none;
                position: absolute;
                top: 3.3px;
                right: 3px;
                border-radius: 5px;

                svg {
                    color: #fff;
                }

                &:disabled {
                    opacity: 0.7;
                }
            }
        }

        .input input {
            width: 18vw;
            height: 32px;
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
    }

    .infos {
        color: #5f04c8;

        span {
            color: rgb(102, 102, 102);;
        }

        margin-top: 5px;
        font-size: 13px;

        .total {
            color: #666;
            font-weight: bold;
            span {
                color: #5f04c8;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .filters-search {
            flex-direction: column;
            .input {
                margin-top: 5px;
                input {
                    width: 92vw;
                }
            }
        }
    }
`;

export const FeedItem = styled.div`
    /* &:not(:first-of-type) { */
    margin-top: 10px;
    /* } */

    width: 100%;

    .info,
    .info-group {
        &:not(:first-of-type) {
            margin-top: 10px;
        }

        p {
            text-align: justify;
            font-size: 14px;
            color: #666;
        }

        h4 {
            font-size: 16px;
            color: #333;
        }

        span {
            font-weight: bold;
            color: #7e1bf0;
        }

        &.subscribe {
            text-align: center;
            display: flex;
            /* align-items: center; */
            justify-content: center;
        }
    }

    .info-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    /* border: 1px solid #999; */
    background: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
    border-radius: 5px;
    padding: 15px;

    &.helped {
        opacity: 0.8;
        border: 2px solid rgb(4, 211, 97);
    }

    .checked {
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(4, 211, 97);
    }
`;
