import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const killButtonCss = style({
  border: 'none',
  color : vars.colors.primary.black,
  fontSize: '14px',
  padding: '10px 20px',
  background: vars.colors.primary.white,
  cursor: 'pointer',
  borderRadius: '5px',
});

export  { killButtonCss };