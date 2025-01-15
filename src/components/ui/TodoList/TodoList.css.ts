import { style  } from '@vanilla-extract/css';

import { vars } from '@/styles/theme.css.ts';

enum TaskStatus {
  COMPLETED = 'COMPLETED',
  PENDING = 'PENDING',
}

const ListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

const ListContainer = style({
});

const EditInput = style({});

const ConfigurationButton = style({
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
});

const TaskWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
})

const TaskList = {
    [TaskStatus.COMPLETED]: style({
      color: vars.colors.primary.successGreen
    }),
    [TaskStatus.PENDING]: style({
      color: vars.colors.primary.white
    })


};
const ConfigurationButtonWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: "5px" ,
  marginLeft: "5px"
});

export {
  ListWrapper,
  ListContainer,
  EditInput,
  ConfigurationButton,
  TaskList,
  TaskStatus,
  TaskWrapper,
  ConfigurationButtonWrapper
}