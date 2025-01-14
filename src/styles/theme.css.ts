import {

  createThemeContract,

} from "@vanilla-extract/css";

const colors = createThemeContract({
  primary: {
    white: null,
    black: null,
    errorRed :null,
    successGreen : null,
    buttonTeal : null,
  },






});





export const vars = { colors };

export { colors };
