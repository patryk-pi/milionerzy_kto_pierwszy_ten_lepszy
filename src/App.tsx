import Answer from "./components/Answer";

function App() {
    const answers: string[] = ["A", "B", "C", "D"];

    return (
        <>
            {answers.map((answer, index) => (
                <Answer key={index} answer={answer} />
            ))}
        </>
    );
}

export default App;
