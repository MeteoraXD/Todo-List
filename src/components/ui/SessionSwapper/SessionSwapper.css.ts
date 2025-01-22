import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const SwapperWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
});

const SwapperButton = style({
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  border: 'none',
  color: vars.colors.greySea.dark,
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',
  fontSize: '1rem',
  fontWeight: '500',

  ':hover': {
    background: vars.colors.primary.accent,
    color: vars.colors.base.white,
  },
});

const activeButton = style({
  background: vars.colors.primary.accent,
  color: vars.colors.base.white,
});

export {
  SwapperWrapper,
  SwapperButton,
  activeButton,
};