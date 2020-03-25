import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;

    #svg-map {
        path {
            fill: #4a148c;
        }
        text {
            fill: #fff;
            font: 12px Arial-BoldMT, sans-serif;
            cursor: pointer;
        }
        a {
            text-decoration: none;
            &:hover {
                cursor: pointer;
                text-decoration: none;
            }
            &:hover path {
                fill: #380873 !important;
            }
            &:hover .circle {
                fill: #380873 !important;
                cursor: pointer;
            }
        }
        .circle {
            fill: #7f36d9;
        }
    }
`;
