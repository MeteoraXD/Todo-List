import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';


const TodoViewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '1.5rem',
  justifyItems: 'center',
  borderRadius: '15px',
  padding: '15px',
  backgroundSize: 'cover',

});

const TodoTitle = style({
  color: vars.colors.base.black,
  fontSize: '40px',
  display: 'flex',
  justifyContent: 'center',
});

export { TodoTitle, TodoViewWrapper };
