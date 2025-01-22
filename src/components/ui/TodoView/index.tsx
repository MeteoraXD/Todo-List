import React from 'react';

import SessionSwapper from '@/components/ui/SessionSwapper';
import TodoInput from '@/components/ui/TodoInput';
import TodoList from '@/components/ui/TodoList';
import TodoProvider from '@/providers/TodoProvider';
import { TodoTitle, TodoViewWrapper } from '@/components/ui/TodoView/TodoView.css.ts';
import TodoNavbar from '@/components/ui/Core/Navbar';

const TodoView: React.FC = () => {

  return (
    <div>
      <TodoNavbar />
      <div className={TodoViewWrapper}>
        <TodoProvider>

          <h1 className={TodoTitle}> TASK LIST</h1>

          <SessionSwapper />
          <TodoList />
          <TodoInput />

        </TodoProvider>

      </div>
    </div>
  );
};

export default TodoView;
