import Answer from "./components/Answer";
import { StyledContainer } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";

function App() {
    const answers: string[] = ["A", "B", "C", "D"];

    return (
        <>
            <GlobalStyles />
            <StyledContainer>
                <div>
                    {answers.map((answer, index) => (
                        <Answer key={index} answer={answer} />
                    ))}
                </div>
            </StyledContainer>
        </>
    );
}

export default App;
