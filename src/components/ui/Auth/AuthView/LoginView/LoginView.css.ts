import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';
import BackgroundImage
  from '@/assets/xzczzxczxczczczczcz.jpg';

const LoginWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: 'cover',
  height: '100vh',
});
const TitleWrapper = style({
  display: 'flex',
 
  flexDirection: 'column',
});

const LoginTitle = style({
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: '30px',
  color: vars.colors.base.black,
});
const LoginSubHeading = style({
  fontSize: '14px',
  color: vars.colors.greySea.dark,
});

const LoginForm = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '360px',
  padding: '4rem',
  borderRadius: '8px',
  boxShadow: ' rgba(8,8, 8, 0.7) 0px 4px 12px;',
  backgroundColor: vars.colors.base.white,
});

const LoginInputLabel = style({
  color: vars.colors.base.black,
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '8px',
});

const LoginInput = style({
  fontSize: '16px',
  padding: '10px ',
  marginBottom: '20px',
  color: vars.colors.base.black,
  outline: 'none',
  border: 'none',
  borderBottom: '1px solid black',
  transition: 'border-color 0.3s',
  ':focus': {
    borderBottom: ` 2px solid ${vars.colors.primary.accent}`,
  },

});

const LoginButton = style({
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

const ErrorMessage = style({
  color: 'red',
  fontSize: '14px',
  marginBottom: '20px',
  textAlign: 'center',
});

export {
  LoginWrapper,
  ErrorMessage,
  LoginSubHeading,
  LoginInputLabel,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  TitleWrapper,
};
