import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const todoInputWrapper = style({
  display: 'flex',
  gap: '0.5rem',
  margin: '1.5rem 0 ',
  width: '100%',
  justifyContent: 'center',
});
const InputWrapper = style({
  height: 'fit-content',
  width: '50%',
  justifyContent: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
});
const inputSection = style({
  padding: '0.75rem 1rem',
  width: '70%',
  outline: 'none',
  backgroundColor: 'transparent',
  color: vars.colors.base.black,
  marginTop: '10px',
  border: 'none',
  borderBottom: `1px solid ${vars.colors.base.black}`,
  ':focus': {
    borderBottom: ` 2px solid ${vars.colors.primary.accent}`,
  },
});

const addButton = style({
  background: vars.colors.primary.accent,
  borderRadius: '100%',
  cursor: 'pointer',
  width: '50px',
  height: '50px',
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  transition: 'background 0.3s, transform 0.2s, box-shadow 0.3s',

  ':hover': {
    transform: 'scale(1.1)',
  },
});

const resetButton = style({
  display: 'inline-flex',
  position: 'absolute',
  right: '10rem',
  top: '80%',
  cursor: 'pointer',
  transform: 'translateY(-80%)',
  border: 'none',
  backgroundColor: 'transparent',
});

export { addButton, InputWrapper, inputSection, todoInputWrapper, resetButton };
