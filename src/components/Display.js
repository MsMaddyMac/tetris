import React from 'react'
import { StyledDisplay } from './styles/StyledDisplay';

// destructures gameOver and text from props
const Display = ({ gameOver, text }) => (
        <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
    );

export default Display;
