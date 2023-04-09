import styled from "styled-components";

export const TaskBody = styled.div`
    background-color: rgba(255, 255, 255, 0.1);
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
        color: #CCC;
    }
`;