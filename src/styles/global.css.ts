import { globalStyle } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

globalStyle(':root', {
  fontFamily: ' sans-serif',
  backgroundColor: vars.colors.primary.main,
  overflowX: 'hidden',

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
});








