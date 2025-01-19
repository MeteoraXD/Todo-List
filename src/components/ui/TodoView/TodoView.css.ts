import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

const TodoViewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '560px',
  height: 'auto',
  maxHeight: '1000px',
  background: vars.colors.base.white,
  borderRadius: '15px',
  padding: '15px',
  boxShadow: ' rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;',

});

const TodoTitle = style({
  color: vars.colors.base.black,
  fontSize: '40px',
});

export {
  TodoTitle,
  TodoViewWrapper,
};