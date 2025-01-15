import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const todoInputWrapper = style({
  display: 'flex',
  gap: '0.5rem',
  margin: '1.5rem 0 ',
});

const inputSection = style({
  padding: '10px',
  color: vars.colors.primary.white,
  borderRadius: '5px',
  border: 'none',
  background: 'rgba(24,16,110,0.84)',
});

const addButton = style({
  border: 'none',
  borderRadius: '5px',
  color: vars.colors.primary.black,
  fontSize: '14px',
  // padding: '5px ',
  background: vars.colors.primary.white,

});

export { addButton, inputSection, todoInputWrapper };
