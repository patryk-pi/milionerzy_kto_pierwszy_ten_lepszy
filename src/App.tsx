import { useEffect, useState } from "react";
import Answer from "./components/Answer";
import Buttons from "./components/Buttons";
import { StyledAnswerContainer } from "./components/styles/Answer.styled";
import { StyledContainer } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import {
    StyledAnswersOrder,
    StyledStopWatch,
} from "./components/styles/Summary.styled";

function App() {
    const answers: string[] = ["A", "B", "C", "D"];

    const [isDisabled, setIsDisabled] = useState(
        Array(answers.length).fill(false)
    );

    const setIndividualDisabled = (index: number, value: boolean) => {
        if (!isRunning) return;

        const newIsDisabled = [...isDisabled];
        newIsDisabled[index] = value;
        setIsDisabled(newIsDisabled);
    };

    const [answersOrder, setAnswersOrder] = useState<string[]>([]);

    const startGame = () => {
        if (isRunning) return;
        setAnswersOrder([]);
        setTime(0);
        setIsDisabled(Array(answers.length).fill(false));
        setIsRunning(true);
    };

    const stopGame = () => {
        if (answersOrder.length !== 4) return;
        setIsRunning(false);
    };

    const addAnswerToOrder = (answer: string) => {
        if (!isRunning) return;
        setAnswersOrder((prevOrder) => [...prevOrder, answer]);
    };

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: number;

        if (isRunning) {
            intervalId = setInterval(
                () => setTime((prevTime) => prevTime + 1),
                10
            );
        }

        console.log(milliseconds);

        return () => clearInterval(intervalId);
    }, [isRunning]);

    // Seconds calculation
    const seconds = Math.floor(time / 100);

    // Milliseconds calculation
    const milliseconds = time % 100;
    const formattedMilliseconds = milliseconds.toString().padStart(2, "0");

    return (
        <>
            <GlobalStyles />
            <StyledContainer>
                <h1>Kto pierwszy ten lepszy</h1>
                <StyledAnswerContainer>
                    {answers.map((answer, index) => (
                        <Answer
                            key={index}
                            answer={answer}
                            isDisabled={isDisabled[index]}
                            setIsDisabled={(value) =>
                                setIndividualDisabled(index, value)
                            }
                            answersOrder={answersOrder}
                            setAnswersOrder={addAnswerToOrder}
                        />
                    ))}
                </StyledAnswerContainer>
                <Buttons startGame={startGame} stopGame={stopGame} />
                <StyledStopWatch>
                    {seconds.toString().padStart(2, "0")}:
                    {formattedMilliseconds}
                </StyledStopWatch>
                {!isRunning && (
                    <StyledAnswersOrder>
                        {answersOrder.map((answer, index) => (
                            <p key={index}>{answer}</p>
                        ))}
                    </StyledAnswersOrder>
                )}
            </StyledContainer>
        </>
    );
}

export default App;
