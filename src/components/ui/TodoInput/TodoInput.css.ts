import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const todoInputWrapper = style({
  display: 'flex',
  gap : "1rem",
  marginTop: "1.5rem"
});

const inputSection = style({
  padding : "10px",
  color : vars.colors.primary.white,
  borderRadius  : '5px',
  border: 'none',
})

const addButton = style({
  border: 'none',
  borderRadius: "5px",
  color : vars.colors.primary.black,
  fontSize: '14px',
  padding: '5px ',
  background: vars.colors.primary.white,

});

export { addButton , inputSection , todoInputWrapper  };
