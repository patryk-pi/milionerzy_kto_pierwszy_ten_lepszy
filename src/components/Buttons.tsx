import { StyledButtonsContainer } from "./styles/Buttons.styled";

interface ButtonsProps {
    startGame: () => void;
    stopGame: () => void;
}

const Buttons = ({ startGame, stopGame }: ButtonsProps) => {
    return (
        <StyledButtonsContainer>
            <button onClick={startGame}>Start</button>
            <button onClick={stopGame}>Stop</button>
        </StyledButtonsContainer>
    );
};
export default Buttons;
