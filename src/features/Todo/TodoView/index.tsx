import React from 'react';

import SessionSwapper from '../SessionSwapper';
import TodoInput from '../TodoInput';
import TodoList from '../TodoList';

import TodoProvider from '@/providers/TodoProvider';
import { TodoTitle, TodoViewWrapper } from '@/features/Todo/TodoView/TodoView.css.ts';
import TodoNavbar from '@/components/ui/Core/Navbar';
import { getCurrentUser } from '@/utils/Storage/AuthStorage';
import { CurrentUser } from '@/data/AuthModel';
import TodoSidebar from '@/components/ui/Core/Sidebar';

const TodoView: React.FC = () => {

  const user: CurrentUser | null = getCurrentUser();
  console.log(user);
  return (

    <div>
      <TodoNavbar />
      <TodoSidebar />
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
