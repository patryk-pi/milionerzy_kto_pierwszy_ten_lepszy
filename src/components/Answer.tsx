import { StyledAnswer } from "./styles/Answer.styled";

interface AnswerProps {
    answer: string;
    isDisabled: boolean;
    setIsDisabled: (value: boolean) => void;
    answersOrder: string[];
    setAnswersOrder: (value: string) => void;
}

const Answer = ({
    answer,
    isDisabled,
    setIsDisabled,
    answersOrder,
    setAnswersOrder,
}: AnswerProps) => {
    const selectAnswer = () => {
        setIsDisabled(!isDisabled);
        setAnswersOrder(answer);
        console.log(answersOrder);
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
