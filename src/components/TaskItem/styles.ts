import styled from "styled-components";

export const TaskBody = styled.div<{done: boolean, dark: boolean}>`
    background-color: ${props => props.dark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'};
    border: 1px solid #999;
    display: flex;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 10px;

    input[type=checkbox] {
        margin: 0 15px;
        cursor: pointer;
    }

    .taskBody--name {
        flex: 1;
        color: ${props => props.dark ? '#CCC' : '#000'};
        text-decoration: ${props => props.done ? 'line-through' : 'initial'};
        font-size: 20px;
    }

    .taskBody--deleteIcon, .taskBody--editIcon {
        margin-right: 15px;
        padding: 2px;
        border-radius: 50%;
        cursor: pointer;
    }

    .taskBody--editIcon {
        margin-right: 5px;
    }
`;