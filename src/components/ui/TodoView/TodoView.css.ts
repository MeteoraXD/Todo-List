import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const TodoViewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: "560px",
  height: "auto",
  maxHeight: "1000px",
  backgroundColor: '#100a40',
  borderRadius: "15px",
  padding: "15px",
});

const TodoTitle = style({
  color: vars.colors.primary.white,
  fontSize: '40px'
});

export {
  TodoTitle,
  TodoViewWrapper
}