import { style } from '@vanilla-extract/css';

const LogoutButtonWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
});
const LogoutButton = style({
  border: 'none',
  display: 'flex',
  alignContent: 'center',
  gap: '10px',
  background: 'none',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.05)',
  },
});

export {
  LogoutButton, LogoutButtonWrapper,
};