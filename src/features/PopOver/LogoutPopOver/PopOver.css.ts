import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const TrrigerButton = style({
  border: 'none',
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const PopOverWrapper = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '40px',
  backgroundColor: vars.colors.base.white,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: '9999',
  borderRadius: '8px',
  color: vars.colors.base.black,
  width: '300px',

});

const PopOverTitle = style({
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '20px',
});

const PopOverContent = style({
  fontSize: '16px',
  marginBottom: '20px',
});

const PopOverDangerButton = style({
  backgroundColor: '#d9534f',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
  ':hover': {
    backgroundColor: '#c9302c',
  },
});

const PopOverCancelButton = style({
  backgroundColor: '#f0f0f0',
  color: '#333',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  marginTop: '10px',
  ':hover': {
    backgroundColor: '#ddd',
  },
});

const PopOverButtonWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  gap: '2rem',
});

export {
  PopOverWrapper,
  PopOverTitle,
  PopOverContent,
  PopOverDangerButton,
  PopOverCancelButton,
  TrrigerButton,
  PopOverButtonWrapper,
};
