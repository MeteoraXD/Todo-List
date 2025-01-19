import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const todoInputWrapper = style({
  display: 'flex',
  gap: '0.5rem',
  margin: '1.5rem 0 ',
});

const inputSection = style({
  fontSize: '16px',
  padding: '10px 1px',
  marginBottom: '20px',
  color: vars.colors.base.black,
  outline: 'none',
  border: 'none',
  borderBottom: '1px solid black',
  transition: 'border-color 0.3s',
});

const addButton = style({
  border: 'none',
  borderRadius: '5px',
  background: 'none',
  cursor: 'pointer',
});

export { addButton, inputSection, todoInputWrapper };
