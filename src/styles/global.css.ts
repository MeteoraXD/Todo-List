import { globalStyle } from '@vanilla-extract/css';

globalStyle(':root', {
  fontFamily: '"Roboto", sans-serif',
  lineHeight: '1.5',
  fontWeight: 400,
  colorScheme: 'light dark',
  color: 'rgba(255, 255, 255, 0.87)',
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  background: 'linear-gradient(135deg, #100a40 0%, #3b1e6f 100%)',
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
  color: '#ffffff',
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








