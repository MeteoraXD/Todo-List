import { createTheme } from '@vanilla-extract/css';

import { colors } from '@/styles/theme.css.ts';


const colorData = createTheme(colors, {
  primary: {
    text: '#fff',
    default: '#5d5caf',
    accent: '#4c4cef',
    backdrop: 'rgba(16,10,64,0.84)',
    placeholder: 'rgba(115,133,136,0.55)',
    main: '#f9f9fd',
  },
  secondary: {
    default: '#8585ed',

  },
  greySea: {
    dark: '#7f7f7f',
    default: '#D9D9D9',
    light: '#BFBFBF',
  },
  base: {
    white: '#fff',
    black: '#070708',
  },
  error: {
    light: '#EF4444',
    dark: '#7F1D1D',
  },
  success: {
    light: '#21db21',
    dark: '#32a832',
  },
});

export default colorData;
