import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const RegistrationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const RegistrationTitle = style({
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '30px',
  color: vars.colors.base.black,
  marginBottom: '20px',
});

const RegistrationLabel = style({
  color: vars.colors.base.black,
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '8px',

});

const RegistrationForm = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '360px',
  padding: '4rem',
  borderRadius: '8px',
  boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',
});

const RegistrationInput = style({
  fontSize: '16px',
  padding: '10px 1px',
  marginBottom: '20px',
  color: vars.colors.base.black,
  outline: 'none',
  border: 'none',
  borderBottom: '1px solid black',
  transition: 'border-color 0.3s',

});
const RegistrationSubmitButton = style({
  border: 'none',
  color: vars.colors.base.white,
  fontSize: '16px',
  padding: '12px 24px',
  background: vars.colors.primary.accent,
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background-color 0.3s, transform 0.2s',
  margin: '10px 0',


  ':hover': {
    transform: 'scale(1.05)',
  },
});

const ErrorResponseMessage = style({
  fontSize: '14px',
  marginBottom: '20px',
  textAlign: 'center',
  color: vars.colors.error.dark,
});

const SuccessResponseMessage = style({
  color: vars.colors.success.dark,
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