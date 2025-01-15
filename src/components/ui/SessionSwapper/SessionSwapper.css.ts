import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const SwapperWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: "2rem"
});
const SwapperLabel = style({
  color: vars.colors.primary.white,

});
const SwapperInput = style({});

export {
  SwapperWrapper,
  SwapperLabel,
  SwapperInput,
}