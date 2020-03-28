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

        a {
            font-weight: bold;
            background: #7e1bf0;
            color: #fff;
            border-radius: 10px;
            padding: 8px 16px;
            transition: all 0.2s;
            
            &:hover {
                background: #5f04c8;
            }
        }
    }
`;


export const FeedItem = styled.div`
    
    /* &:not(:first-of-type) { */
        margin-top: 10px;
    /* } */
    
    width: 100%;
    
    .info, .info-group {
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


`;