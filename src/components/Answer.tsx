import { useState } from "react";
import { StyledAnswer } from "./styles/Answer.styled";

interface AnswerProps {
    answer: string;
}

const Answer = ({ answer }: AnswerProps) => {
    const [disabled, setDisabled] = useState(true);
    return <StyledAnswer>{answer}</StyledAnswer>;
};
export default Answer;
