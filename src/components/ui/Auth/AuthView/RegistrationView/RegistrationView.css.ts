import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const RegistrationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(16,10,64,0.84)',
  padding: '4rem',
  width: '100%',
  maxWidth: '360px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
});

const RegistrationTitle = style({
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '30px',
  color: vars.colors.primary.white,
  marginBottom: '20px',
});

const RegistrationLabel = style({
  color: vars.colors.primary.white,
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '8px',

});

const RegistrationForm = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

});

const RegistrationInput = style({
  fontSize: '16px',
  padding: '12px 16px',
  marginBottom: '20px',
  borderRadius: '4px',
  background: 'rgba(24,16,110,0.84)',
  color: vars.colors.primary.white,
  outline: 'none',
  border: 'none',
  transition: 'border-color 0.3s',
});
const RegistrationSubmitButton = style({
  border: 'none',
  color: vars.colors.primary.black,
  fontSize: '16px',
  padding: '12px 24px',
  background: '#fff',
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background-color 0.3s, transform 0.2s',
  margin: '10px 0',


  ':hover': {
    backgroundColor: '#fff 80%',
    transform: 'scale(1.05)',
  },
});

const ErrorResponseMessage = style({
  fontSize: '14px',
  marginBottom: '20px',
  textAlign: 'center',
  color: vars.colors.primary.errorRed,
});

const SuccessResponseMessage = style({
  color: vars.colors.primary.successGreen,
  fontSize: '14px',
  marginBottom: '20px',
  textAlign: 'center',

});

export {
  RegistrationWrapper,
  RegistrationLabel,
  RegistrationTitle,
  RegistrationForm,
  RegistrationInput,
  RegistrationSubmitButton,
  SuccessResponseMessage,
  ErrorResponseMessage,
};