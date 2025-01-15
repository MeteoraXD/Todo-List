import React from 'react';

import SessionSwapper from '@/components/ui/SessionSwapper';
import TodoInput from '@/components/ui/TodoInput';
import TodoList from '@/components/ui/TodoList';
import KillButton from '@/components/ui/KillButton';
import TodoProvider from '@/providers/TodoProvider';
import { TodoTitle, TodoViewWrapper } from '@/components/ui/TodoView/TodoView.css.ts';


const TodoView: React.FC = () => {
  return (
<div className={TodoViewWrapper} >
      <TodoProvider>
        <Navbar  >
          <Logout/>
        </Navbar>
        <h1 className={TodoTitle} > TODOLIST</h1>
        <SessionSwapper />
        <TodoInput />
        <TodoList />
        <KillButton/>
      </TodoProvider>

</div>
  );
};

export default TodoView;
