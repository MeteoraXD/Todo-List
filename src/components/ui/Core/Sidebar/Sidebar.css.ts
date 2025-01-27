import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const SidebarWrapper = style({
  background: vars.colors.primary.accent,
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 0',
  overflow: 'hidden',
  width: '250px',
  transition: '0.4s all linear',
  position: 'fixed',

});

const SidebarItems = style({
  cursor: 'pointer',
  padding: '1.5rem 1rem',
  color: vars.colors.base.white,
  borderBottom: `1px solid ${vars.colors.greySea.light}`,
  width: '100%',
  display: 'flex',
  gap: '.5rem',
  alignItems: 'center',

  ':hover': {
    color: vars.colors.base.white,
    background: vars.colors.secondary.default,
    paddingLeft: '1rem',
    borderLeft: `4px solid ${vars.colors.primary.accent}`,
  },
});

export {
  SidebarWrapper,
  SidebarItems,
};