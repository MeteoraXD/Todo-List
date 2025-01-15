import { style  } from '@vanilla-extract/css';

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

const ListContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const EditInput = style({
  padding : "10px",
  color : vars.colors.primary.white,
  borderRadius  : '5px',
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
  marginTop: '10px',
  width: '90%',
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