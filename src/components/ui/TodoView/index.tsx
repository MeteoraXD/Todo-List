import React from 'react';

import SessionSwapper from '@/components/ui/SessionSwapper';
import TodoInput from '@/components/ui/TodoInput';
import TodoList from '@/components/ui/TodoList';
import KillButton from '@/components/ui/KillButton';
import TodoProvider from '@/providers/TodoProvider';
import { TodoTitle, TodoViewWrapper } from '@/components/ui/TodoView/TodoView.css.ts';
import Logout from '@/components/ui/Auth/LogOut/Logout.tsx';


const TodoView: React.FC = () => {
  return (
<div className={TodoViewWrapper} >
      <TodoProvider>
        <div  >
          <Logout/>
        </div>
        <h1 className={TodoTitle} > TODO LIST</h1>
        <SessionSwapper />
        <TodoList />
        <TodoInput />

        <KillButton/>
      </TodoProvider>

</div>
  );
};

export default TodoView;
