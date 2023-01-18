import styled from "styled-components";

export const DaysSelectContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputPlusButton = styled.div`
    display: flex;

    input {
        width: 100%;
        border-right: 0;
        border-radius: 5px 0 0 5px;
    }

    button {
        border: 0;
        border-radius: 0 5px 5px 0;
        background-color: var(--fc-02);
        color: white;
    }
`

export const DaysContainer = styled.div`
    display: flex;

    button {
        display: flex;
        align-items: center;
        height: 30px;
        margin-top: 10px;
        margin-bottom: 10px;
        margin-right: 5px;
        border: 0;
        background-color: var(--bc-03);
        color: white;
    }
`;