import { createTheme } from "@vanilla-extract/css";

import { colors } from '@/styles/theme.css.ts';



const colorData = createTheme(colors, {
  primary: {
    white: "#fff",
    black: "#000",
    errorRed : "#ff0000",
    successGreen : "#66e013",
    buttonTeal : "#0be0ce",
  },

});

export default colorData;
