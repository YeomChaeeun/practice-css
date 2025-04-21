import { style, createVar, keyframes } from '@vanilla-extract/css';

// Create CSS variables
export const colorVar = createVar();
export const backgroundColorVar = createVar();

// Create keyframes
const pulse = keyframes({
  '0%': { opacity: 0.6 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.6 },
});

// Create a base button style
export const buttonBase = style({
  padding: '12px 24px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  transition: 'all 0.2s ease-in-out',
  color: colorVar,
  backgroundColor: backgroundColorVar,

  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});

// Create a primary button variant
export const primaryButton = style([
  buttonBase,
  {
    vars: {
      [colorVar]: 'white',
      [backgroundColorVar]: '#3498db',
    },
  },
]);

// Create a secondary button variant
export const secondaryButton = style([
  buttonBase,
  {
    vars: {
      [colorVar]: '#333',
      [backgroundColorVar]: '#f1f1f1',
    },
    border: '1px solid #ddd',
  },
]);

// Create an animated button
export const animatedButton = style([
  buttonBase,
  {
    animation: `${pulse} 2s infinite ease-in-out`,
  },
]);
