import styled from "styled-components";

export const Container = styled.div<{dark: boolean}>`
    background-color: ${props => props.dark ? '#17181f' : '#FFF'};
    min-height: 100vh;
    color: ${props => props.dark ? '#FFF' : '#17181f'};
    font-family: Arial, Helvetica, sans-serif;

    .toggleButton {
        border: 0;
        outline: 0;
        padding: 0;
        position: absolute;
        top: 10px;
        left: 10px;
        background-color: ${props => props.dark ? '#FFF' : '#17181f'};
        color: ${props => props.dark ? '#CCC' : '#000'};

        width: 40px;
        height: 20px;
        border-radius: 10px;
        transition: all 0.2s ease;
        cursor: pointer;

        .indicator {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: ${props => props.dark ? '#17181f' : '#FFF'};
            transform: scale(0.8);
            transition: all 0.2s ease;
            margin-left: ${props => props.dark ? '0px' : '20px'};
        }
    }
    
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
            color: ${props => props.dark ? '#FFF' : '#17181f'};
            
            &:hover {
                color: #BBB;
            }
        }
    }
`;

export const Body = styled.div<{dark: boolean}>`
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