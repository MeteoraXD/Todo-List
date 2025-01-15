import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const LoginWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

});

const LoginTitle = style({
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '30px',
  color: vars.colors.primary.white,
  marginBottom: '20px',
});

const LoginForm = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '360px',
  padding: '4rem',
  borderRadius: '8px',
  backgroundColor: vars.colors.primary.black,
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const LoginInputLabel = style({
  color: vars.colors.primary.white,
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '8px',
});

const LoginInput = style({
  fontSize: '16px',
  padding: '12px 16px',
  marginBottom: '20px',
  border: '1px solid #ddd',
  borderRadius: '4px',
  backgroundColor: '#f9f9f9',
  color: vars.colors.primary.black,
  outline: 'none',
  transition: 'border-color 0.3s',

  ':focus': {
    borderColor: "#435321",
  },
});

const LoginButton = style({
  border: 'none',
  color: vars.colors.primary.black,
  fontSize: '16px',
  padding: '12px 24px',
  background: "#fff",
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background-color 0.3s, transform 0.2s',

  ':hover': {
    backgroundColor: "#fff 80%",
    transform: 'scale(1.05)',
  },


});

const ErrorMessage = style({
  color: 'red',
  fontSize: '14px',
  marginBottom: '20px',
  textAlign: 'center',
});

export { LoginWrapper, ErrorMessage, LoginInputLabel, LoginTitle, LoginForm, LoginInput, LoginButton };
