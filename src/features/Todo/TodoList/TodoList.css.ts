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
  justifyItems: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '0',
});

const EditInput = style({
  padding: '0.75rem 1rem',
  width: '100%',
  outline: 'none',
  backgroundColor: 'transparent',
  color: vars.colors.base.black,
  marginTop: '10px',
  border: 'none',
  borderBottom: `1px solid ${vars.colors.base.black}`,
  ':focus': {
    borderBottom: ` 2px solid ${vars.colors.primary.accent}`,
  },
});

const ConfigurationEditButton = style({
  background: vars.colors.success.light,
  border: 'none',
  padding: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
  whiteSpace: 'nowrap',

});
const ConfigurationDeleteButton = style({
  background: vars.colors.error.light, padding: '5px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',

});

const TaskWrapper = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FEFCFF',
  marginTop: '10px',
  width: '50vw',
  borderRadius: '5px',
  minHeight: '40px',
  padding: '1rem',
  gap: '20px',
  boxShadow: 'rgba(0,0, 187, 0.7) 2px 0px 8px;',
});

const TaskList = {
  [TaskStatus.COMPLETED]: style({
    color: vars.colors.primary.accent,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: '600',
    flex: 1,
    minWidth: 0,
  }),
  [TaskStatus.PENDING]: style({
    color: vars.colors.base.black,
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  }),
};
const ConfigurationButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

const ConfigurationButtonWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '5px',
  marginLeft: '5px',
});

export {
  ListWrapper,
  EditInput,
  ConfigurationEditButton,
  ConfigurationDeleteButton,
  TaskList,
  TaskStatus,
  TaskWrapper,
  ConfigurationButtonWrapper,
  ConfigurationButton,

};