import React from 'react';
import { StyledStartButton } from './styles/StyledStartButton';

// destructures callback from props
const StartButton = ({ callback }) => (
        <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
    );

export default StartButton;
