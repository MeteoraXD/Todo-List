import { createTheme } from '@vanilla-extract/css';

import { colors } from '@/styles/theme.css.ts';

export const lightTheme = createTheme(colors, {
  primary: {
    text: '#000',
    default: '#2f8ab9',
    accent: '#5959d5',
    backdrop: 'rgba(255,255,255,0.9)',
    placeholder: 'rgba(100,100,100,0.6)',
    main: '#ffffff',
  },
  secondary: {
    default: '#8787e1',
    light: '#e5e5f5',
  },
  greySea: {
    dark: '#d1d1d1',
    default: '#eaeaea',
    light: '#f2f2f2',
  },
  base: {
    white: '#fff',
    black: '#000',
  },
  error: {
    light: '#a93838',
    dark: '#cc0000',
  },
  success: {
    light: '#56b656',
    dark: '#00cc00',
  },
});

export const darkTheme = createTheme(colors, {
  primary: {
    text: '#fff',
    default: '#1e1e2e',
    accent: '#3b3baf',
    backdrop: 'rgba(16,10,64,0.84)',
    placeholder: 'rgba(115,133,136,0.55)',
    main: '#121212',
  },
  secondary: {
    default: '#486ede',
    light: '#c9b4c5',
  },
  greySea: {
    dark: '#3f3f3f',
    default: '#5f5f5f',
    light: 'rgba(127,127,127,0.66)',
  },
  base: {
    white: '#fff',
    black: '#000',
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
