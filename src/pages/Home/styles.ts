import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #f3f3f5;
`;

export const HomeContent = styled.div`
    display: flex;
    width: 40vw;
    height: 50vh;
    background-color: #fff;
    border: 1px solid #e2e5e5;
    border-radius: 5px;
    font-family: 'Inter', sans-serif;
`;

export const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 60%;
    height: 100%;
    padding: 60px 50px;
    font-weight: 500;
    color: #555;
    
    h2 {
        font-size: 30px;
        font-weight: 700;
    }

    .input_container {
        display: flex;
        flex-direction: column;
    }

    label {
        margin-bottom: 10px;
    }

    input {
        height: 40px;
        border: 1px solid #e2e2e2;
        border-radius: 5px;
        padding: 10px;
    }

    input:focus {
        outline: 0;
        border: 2px solid #6af;
    }

    span {
        margin-top: 5px;
        font-size: 12px;
        font-weight: 600;
        color: #999
    }
`;

export const ResponseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    background-color: #f6f6f6;
    width: 40%;
    height: 100%;
    padding: 100px 40px;
    font-style: italic;
    color: #6af;

    h2 {
        padding: 4px 0px;
        font-size: 20px;
        font-weight: 700;
        border-bottom: 2px solid;
    }

    h3 {
        font-size: 16px;
    }

    span {
        font-weight: 600;
    }
`;