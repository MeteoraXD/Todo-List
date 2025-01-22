import {

  createThemeContract,

} from '@vanilla-extract/css';

const colors = createThemeContract({
  primary: {
    text: null,
    default: null,
    accent: null,
    backdrop: null,
    placeholder: null,
    main: null,

  },

  secondary: {
    default: null,
    light: null,

  },
  greySea: {
    light: null,
    default: null,
    dark: null,
  },
  base: {
    white: null,
    black: null,
  },
  error: {
    dark: null,
    light: null,
  },
  success: {
    dark: null,
    light: null,
  },

});


export const vars = { colors };

export { colors };
