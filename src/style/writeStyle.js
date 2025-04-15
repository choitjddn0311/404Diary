import styled from "styled-components";

export const WriteContainer = styled.section `
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const WriteInner = styled.div `
    width: 1400px;
    height: 90vh;

    & input[type=submit] {
        width: 100%;
        height: 50px;
        background: var(--mainColor);
        color: #fff;
        border: none;
    }
`;
export const WriteForm = styled.form `
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const Title = styled.div `
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.filled h1 {
        color: var(--mainColor);
    }
    &.filled input {
        border-bottom: 1px solid var(--mainColor);
    }
    & > h1 {
        color: #aaa;
    }
    & > input {
        width: 100%;
        height: 7vh;
        background: transparent;
        border: none;
        border-bottom: 1px solid #aaa;
        outline: none;
        font-size: 30px;
    }
`;
export const Content = styled.div `
    width: 100%;
    height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &.filled textarea {
        border: 1px solid var(--mainColor);
    }
    
    &.filled h2 {
        color: var(--mainColor);
    }

    & > h2 {
        color: #aaa;
    }
    & > textarea {
        width: 100%;
        height: 60vh;
        resize: none;
        outline: none;
        border: 1px solid #aaa;
        padding: 20px;
        font-size: var(--mainFontSize);
    }
`;

