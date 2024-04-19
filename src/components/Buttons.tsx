import { StyledButtonsContainer } from "./styles/Buttons.styled";

interface ButtonsProps {
    startGame: () => void;
}

const Buttons = ({ startGame }: ButtonsProps) => {
    return (
        <StyledButtonsContainer>
            <button onClick={startGame}>Start</button>
            <button>Stop</button>
        </StyledButtonsContainer>
    );
};
export default Buttons;
