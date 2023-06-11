import styled from 'styled-components';
import { useState } from 'react';

const SIZE_TO_PADDINGS = {
    md: '14px 34px',
    sm: '10px 25px',
};

const SIZE_TO_FONT = {
    md: '20px',
    sm: '16px',
};


const ButtonWrapper = styled.button`
  outline: none;
  border:none;
  box-shadow: 0 0 ${({isPressed}) => isPressed ? '9px #AAD5FF' : '16px #BDD9FF'};
  border-radius: var(--baseBorderRadius);
  background: ${({isPressed}) => isPressed ? 'linear-gradient(0deg, #CAD5F2, #CAD5F2), #FFFFFF' : '#FFFFFF'};
  font-family: 'Gotham', serif;
  font-weight: 700;
  font-size: ${({size}) => SIZE_TO_FONT[size]};
  padding: ${({size}) => SIZE_TO_PADDINGS[size]};
  cursor: pointer;
  transition: box-shadow 0.25s ease-in, background 0.25s ease-in;
  
  &:disabled {
    color: #456293;
    background: rgba(69, 98, 147, 0.35);
    box-shadow: 0 0 9px #AAD5FF;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 22px;
  }
`;

export const Button = ({ onClick, isChangeOnPress, ...restProps }) => {
    const [isPressed, setIsPressed] = useState(false);
    const handleClick = () => {
        if (isChangeOnPress) {
            setIsPressed(true);
            setTimeout(() => setIsPressed(false), 300);
        }
        onClick?.();
    }

    return <ButtonWrapper {...restProps } onClick={handleClick} isPressed={isPressed} />
}