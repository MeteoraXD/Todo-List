import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';
import BackgroundImage from '@/assets/xzczzxczxczczczczcz.jpg';
import { mediaQuery } from '@/styles/utilities.css.ts';

const RegistrationWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  height: '100vh',

});

const RegistrationTitle = style({
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '30px',
  color: vars.colors.base.black,
});

const RegistrationLabel = style({
  color: vars.colors.base.black,
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '8px',
});

const RegistrationSubHeading = style({
  fontSize: '14px',
  color: vars.colors.greySea.dark,
});
const RegisterLabelInputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '20px',
});

const RegistrationForm = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '360px',
  padding: '4rem',
  borderRadius: '8px',
  boxShadow: ' rgba(8,8, 8, 0.7) 0px 4px 12px;',
  backgroundColor: vars.colors.base.white,


  [mediaQuery('small')]: {
    maxWidth: '320px',
  },

});

const RegistrationInput = style({
  fontSize: '16px',
  padding: '10px ',
  paddingRight: '40px',
  color: vars.colors.base.black,
  outline: 'none',
  border: 'none',
  borderBottom: '1px solid black',
  width: '100%',
  boxSizing: 'border-box',
  transition: 'border-color 0.3s',
  ':focus': {
    borderBottom: `2px solid ${vars.colors.primary.accent}`,
  },

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
  margin: '20px 0',


  ':hover': {
    transform: 'scale(1.05)',
  },
});

const ErrorResponseMessage = style({
  fontSize: '14px',
  marginBottom: '20px',
  color: vars.colors.error.dark,

});
const PasswordToggleWrapper = style({
  position: 'relative',
});

const ToggleButton = style({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-60%)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});


export {
  RegistrationWrapper,
  RegistrationLabel,
  RegistrationTitle,
  RegistrationForm,
  RegistrationInput,
  RegistrationSubmitButton,
  ErrorResponseMessage,
  RegistrationSubHeading,
  RegisterLabelInputWrapper,
  PasswordToggleWrapper,
  ToggleButton,
};