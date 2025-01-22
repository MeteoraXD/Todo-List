import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const NavBarHeader = style({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '100%',
  top: '0px',
  height: '70px',
  position: 'sticky',
});

const NavBarWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: vars.colors.primary.accent,
  backgroundSize: 'cover',
  padding: '0 30px ',
  color: vars.colors.base.white,
});

const NavBarTime = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
});

const DropDownButton = style({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
});

const DropDownList = style({
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  right: '0',
  padding: '0 10px 10px 10px',
  listStyle: 'none',
  background: '#f0f3f9',
  borderRadius: '3px,',
});
const DropDownItems = style({
  padding: '8px ',
  cursor: 'pointer',
});

export { NavBarWrapper, DropDownButton, DropDownList, DropDownItems, NavBarHeader, NavBarTime };
