import { useState } from "react";
import { StyledAnswer } from "./styles/Answer.styled";

interface AnswerProps {
    answer: string;
    isDisabled: boolean;
    setIsDisabled: (value: boolean) => void;
}

const Answer = ({ answer, isDisabled, setIsDisabled }: AnswerProps) => {
    const selectAnswer = () => {
        setIsDisabled(!isDisabled);
    };

    return (
        <StyledAnswer
            onClick={selectAnswer}
            state={isDisabled}
            disabled={isDisabled}
        >
            {answer}
        </StyledAnswer>
    );
};

export default Answer;
