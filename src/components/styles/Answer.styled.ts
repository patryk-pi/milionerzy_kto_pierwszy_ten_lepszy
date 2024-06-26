import styled from "styled-components";

interface StyledAnswerProps {
    state: boolean;
    disabled?: boolean;
}

export const StyledAnswer = styled.button<StyledAnswerProps>`
    padding: 20px 150px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: ${({ state }) => (state ? "orange" : "white")};
    color: red;
    cursor: pointer;
    font-size: 25px;
    font-weight: 700;
`;

export const StyledAnswerContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;
