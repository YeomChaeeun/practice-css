import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { primaryButton, secondaryButton, animatedButton } from '../styles/button.css.ts';

// Define props for our Button component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'animated';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
}

// Using Emotion to add dynamic styles based on props
const ButtonContainer = styled.button<{ size: string }>`
  ${(props) =>
    props.size === 'small' &&
    css`
      font-size: 12px;
      padding: 8px 16px;
    `}

  ${(props) =>
    props.size === 'medium' &&
    css`
      font-size: 16px;
    `}

  ${(props) =>
    props.size === 'large' &&
    css`
      font-size: 20px;
      padding: 16px 32px;
    `}
`;

// Button component that combines Vanilla Extract and Emotion
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
}) => {
  // Determine which Vanilla Extract class to use based on variant
  const getButtonClass = () => {
    switch (variant) {
      case 'primary':
        return primaryButton;
      case 'secondary':
        return secondaryButton;
      case 'animated':
        return animatedButton;
      default:
        return primaryButton;
    }
  };

  return (
    <ButtonContainer className={getButtonClass()} size={size} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
