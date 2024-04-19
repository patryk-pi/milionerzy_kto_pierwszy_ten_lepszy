import Answer from "./components/Answer";
import { StyledAnswerContainer } from "./components/styles/Answer.styled";
import { StyledContainer } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

function App() {
    const answers: string[] = ["A", "B", "C", "D"];

    return (
        <>
            <GlobalStyles />
            <StyledContainer>
                <h1>Kto pierwszy ten lepszy</h1>
                <StyledAnswerContainer>
                    {answers.map((answer, index) => (
                        <Answer key={index} answer={answer} />
                    ))}
                </StyledAnswerContainer>
            </StyledContainer>
        </>
    );
}

export default App;
