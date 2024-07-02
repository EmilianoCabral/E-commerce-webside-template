
import React from 'react';
import './Headerbutton.css';

interface HeadersbuttonProps {
    clicked: boolean;
    handleClick: () => void;
}

export const Headersbutton: React.FC<HeadersbuttonProps> = ({ clicked, handleClick }) => {
    console.log('Headersbutton props:', { clicked, handleClick });
    return (
        <div onClick={handleClick} className={`icon nav-icon-5 ${clicked ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};
