import Answer from "./components/Answer";
import { StyledContainer } from "./components/styles/Container.styled";

function App() {
    const answers: string[] = ["A", "B", "C", "D"];

    return (
        <StyledContainer>
            <div>
                {answers.map((answer, index) => (
                    <Answer key={index} answer={answer} />
                ))}
            </div>
        </StyledContainer>
    );
}

export default App;
