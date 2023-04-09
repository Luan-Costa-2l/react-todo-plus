import styled from "styled-components";

export const SearchBody = styled.div`
    border: 1px solid #777;
    border-radius: 15px;
    height: 40px;
    margin-top: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;

    .addIcon, input {
        border: 0;
        outline: 0;
        background-color: transparent;
    }

    .addIcon {
        font-size: 30px;
        line-height: 40px;
        padding: 0 10px;
        color: #CCC;
        cursor: pointer;
    }

    input {
        flex: 1;
        height: inherit;
        padding: 5px;
        font-size: 20px;
        color: #CCC;
    }
`;