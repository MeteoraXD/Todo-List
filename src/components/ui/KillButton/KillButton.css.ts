import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const killButtonCss = style({
  border: ` ${vars.colors.greySea.dark} 1px solid `,
  color: vars.colors.greySea.dark,
  fontSize: '12px',
  padding: '5px 10px',
  background: vars.colors.base.white,
  cursor: 'pointer',
  borderRadius: '5px',
  ':hover': {
    transform: 'scale(1.1)',
  },

});

export { killButtonCss };