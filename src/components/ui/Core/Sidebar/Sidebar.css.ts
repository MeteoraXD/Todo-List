import { style, styleVariants } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';
import { mediaQuery } from '@/styles/utilities.css.ts';

const SidebarWrapper = style({
  background: vars.colors.primary.accent,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '1.5rem 0',
  overflow: 'hidden',
  width: '250px',
  transition: '0.8s all linear',
  position: 'fixed',
  transform: 'translateX(0)',

  [mediaQuery('Large')]: {
    width: '100px',
  },
});

const SidebarVariants = styleVariants({
  collapsed: [
    SidebarWrapper,
    {
      width: '100px',
    },
  ],
  expanded: [
    SidebarWrapper,
    {
      width: '250px',
    },
  ],
});

const SidebarItemWrapper = style({
  padding: '0',
});

const ToggleButton = style({
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s',
});

const StyleSidebarItems = style({
  cursor: 'pointer',
  padding: '1.5rem 1rem',
  color: vars.colors.base.white,
  borderBottom: `1px solid ${vars.colors.greySea.light}`,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
  justifyContent: 'center',
  ':hover': {
    color: vars.colors.base.white,
    background: vars.colors.secondary.default,
    paddingLeft: '1rem',
    borderLeft: `4px solid ${vars.colors.primary.accent}`,
  },
});

const LinkStyle = style({
  alignItems: 'center',
  display: 'flex',
  gap: '.5rem',
  ':hover': {
    color: vars.colors.base.white,
  },
});

const LinkedStyled = styleVariants({
  collapsed: [LinkStyle, {
    display: 'flex',
    alignItems: 'center',

  }],
  expanded: [LinkStyle, {}],
});

const LinkTitle = styleVariants({
  collapsed: [
    {
      display: 'none',
    },
  ],
  expanded: [
    {
      color: vars.colors.base.white,

      display: 'block',
    },
  ],
});

export {
  StyleSidebarItems,
  SidebarVariants,
  SidebarItemWrapper,
  ToggleButton,
  LinkTitle,
  LinkedStyled,
};
