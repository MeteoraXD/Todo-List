import { style } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

enum TaskStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
}

const ListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  listStyle: 'none',
  width: '100%',
});


const EditInput = style({
  padding: '10px',
  color: vars.colors.base.black,
  background: 'rgba(26,14,199,0.84)',
  borderRadius: '5px',
  border: 'none',
});

const ConfigurationButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

const TaskWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'space-between',
  justifyContent: 'space-between',
  height: '100%',
  background: `linear-gradient(
    135deg, 
    rgba(24, 16, 110, 0.84) 0%, 
    rgba(48, 32, 150, 0.7) 50%, 
    rgba(72, 48, 190, 0.5) 100%
  )`,
  marginTop: '10px',
  width: '95%',
  borderRadius: '5px',
  maxHeight: '40px',
  padding: '5px',
});

const TaskList = {
  [TaskStatus.COMPLETED]: style({
    color: vars.colors.success.dark,
  }),
  [TaskStatus.PENDING]: style({
    color: vars.colors.base.black,
  }),


};
const ConfigurationButtonWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  marginLeft: '5px',
});

export {
  ListWrapper,

  EditInput,
  ConfigurationButton,
  TaskList,
  TaskStatus,
  TaskWrapper,
  ConfigurationButtonWrapper,
};