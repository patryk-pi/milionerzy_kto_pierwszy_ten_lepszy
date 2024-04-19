import { useState } from "react";
import { StyledAnswer } from "./styles/Answer.styled";

interface AnswerProps {
    answer: string;
}

const Answer = ({ answer }: AnswerProps) => {
    const selectAnswer = () => {
        setIsDisabled(!isDisabled);
    };

    const [isDisabled, setIsDisabled] = useState(true);

    return (
        <StyledAnswer onClick={selectAnswer} state={isDisabled}>
            {answer}
        </StyledAnswer>
    );
};
export default Answer;
