import { style } from '@vanilla-extract/css';


const KillButtonWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
});

const killButtonCss = style({
  border: 'none',
  display: 'flex',
  alignContent: 'center',
  gap: '10px',
  background: 'none',
  cursor: 'pointer',
  ':hover': {
    transform: 'scale(1.1)',
  },

});

export { killButtonCss, KillButtonWrapper };