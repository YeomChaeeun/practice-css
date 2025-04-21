// Using Vanilla Extract for global styles
import { style } from '@vanilla-extract/css';

export const container = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
});

export const title = style({
  fontSize: '2rem',
  marginBottom: '2rem',
  color: '#333',
});
