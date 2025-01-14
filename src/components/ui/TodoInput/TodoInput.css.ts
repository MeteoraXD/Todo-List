import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const todoInputWrapper = style({
  display: 'flex',
  gap : "3rem",
  margin: "1.5rem 0"
});

const inputSection = style({
  padding : "5px",
  color : vars.colors.primary.white,
})

const addButton = style({
  border: 'none',
  borderRadius: "5px",
  color : vars.colors.primary.black,
  fontSize: '14px',
  padding: '10px 20px',
  background: vars.colors.primary.white,

});

export { addButton , inputSection , todoInputWrapper  };
