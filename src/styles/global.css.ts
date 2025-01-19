import { globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

globalStyle(':root', {
  fontFamily: '"Roboto", sans-serif',
  lineHeight: '1.5',
  fontWeight: 400,
  color: 'rgba(255, 255, 255, 0.87)',
  fontSynthesis: 'none',
  MozOsxFontSmoothing: 'grayscale',
  backgroundColor: vars.colors.primary.main,
  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1)',
});


globalStyle('a', {
  fontWeight: 500,
  color: '#646cff',
  textDecoration: 'inherit',
});

globalStyle('a:hover', {
  color: '#535bf2',
});
globalStyle('input::placeholder', {
  color: vars.colors.primary.placeholder,
});

globalStyle('body', {
  margin: 0,
  display: 'flex',
  placeItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  minWidth: '320px',
  minHeight: '100vh',
});








