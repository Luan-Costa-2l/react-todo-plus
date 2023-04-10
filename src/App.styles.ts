import styled from "styled-components";

export const Container = styled.div`
    background-color: #17181f;
    min-height: 100vh;
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
    
    footer {
        height: 60px;
        font-size: 14px;
        border-top: 1px solid #777;

        p {
            text-align: center;
            margin: 0;
            line-height: 60px;
        }

        a {
            color: #FFF;
            
            &:hover {
                color: #CCC;
            }
        }
    }
`;

export const Body = styled.div`
    max-width: 1020px;
    margin: auto;
    padding: 30px 20px;
    min-height: calc(100vh - 120px);

    header {
        border-bottom: 1px solid #777;
        height: 60px;

        h1 {
            margin: 0;
            text-align: center;
            margin-bottom: 20px;
        }
    }
`;