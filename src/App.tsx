import { useState } from "react";
import Answer from "./components/Answer";
import Buttons from "./components/Buttons";
import { StyledAnswerContainer } from "./components/styles/Answer.styled";
import { StyledContainer } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

function App() {
    const answers: string[] = ["A", "B", "C", "D"];

    const [isDisabled, setIsDisabled] = useState(
        Array(answers.length).fill(false)
    );

    const setIndividualDisabled = (index: number, value: boolean) => {
        const newIsDisabled = [...isDisabled];
        newIsDisabled[index] = value;
        setIsDisabled(newIsDisabled);
    };

    const startGame = () => {
        setIsDisabled(Array(answers.length).fill(false));
    };

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
                        />
                    ))}
                </StyledAnswerContainer>
                <Buttons startGame={startGame} />
            </StyledContainer>
        </>
    );
}

export default App;
