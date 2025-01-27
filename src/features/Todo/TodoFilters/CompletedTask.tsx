import React, { useEffect, useRef, useState } from 'react';

import useTodos from '@/hooks/TodoHook/useTodos.ts';
import { Todo } from '@/data/TodoModel/TodoModel.ts';
import DeleteIcon from '@/components/icons/DeleteIcon';
import EditIcon from '@/components/icons/EditIcon/EditIcon.tsx';
import CompletedIcon from '@/components/icons/CompletedIcon';
import UnCheckedIcon from '@/components/icons/UnCheckedIcon';
import {
  ListWrapper,
  EditInput,
  ConfigurationButton,
  TaskList,
  TaskStatus,
  TaskWrapper,
  ConfigurationButtonWrapper,
  ConfigurationDeleteButton,
  ConfigurationEditButton,
} from '@/features/Todo/TodoList/TodoList.css.ts';
import TodoNavbar from '@/components/ui/Core/Navbar';
import { TodoTitle } from '@/features/Todo/TodoView/TodoView.css.ts';
import TodoSidebar from '@/components/ui/Core/Sidebar';
import SessionSwapper from '@/features/Todo/SessionSwapper';

const CompletedTasks: React.FunctionComponent = () => {
  const { todos, dispatch } = useTodos();

  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editTodoId && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editTodoId]);

  const handleEdit = (todo: Todo) => {
    setEditTodoId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id: number) => {
    if (editText) {
      dispatch({ type: 'UPDATE_TODO', payload: { id, text: editText } });
      setEditTodoId(null);
      setEditText('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, id: number) => {
    if (event.key === 'Enter') {
      handleUpdate(id);
    }
  };

  const completedTodos = todos.filter((todo) => todo.status);

  return (
    <div>
      <TodoNavbar />
      <TodoSidebar />/
      <h1 className={TodoTitle}> Completed Tasks</h1>
      <SessionSwapper />

      {completedTodos.length === 0 ? (
        <p className={ListWrapper}>No tasks are completed</p>
      ) : (
        <ul className={ListWrapper}>
          {completedTodos.map((todo) => (
            <li key={todo.id}>
              {editTodoId === todo.id ? (
                <div className={TaskWrapper}>
                  <input
                    ref={inputRef}
                    className={EditInput}
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(event) => handleKeyDown(event, todo.id)}
                  />
                  <div className={ConfigurationButtonWrapper}>
                    <button
                      className={ConfigurationButton}
                      onClick={() => handleUpdate(todo.id)}
                    >
                      Save
                    </button>
                    <button
                      className={ConfigurationButton}
                      onClick={() => setEditTodoId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div className={TaskWrapper}>
                  <span
                    className={
                      todo.status
                        ? TaskList[TaskStatus.COMPLETED]
                        : TaskList[TaskStatus.PENDING]
                    }
                  >
                    {todo.text}
                  </span>
                  <div className={ConfigurationButtonWrapper}>
                    <button
                      onClick={() => handleEdit(todo)}
                      className={ConfigurationEditButton}
                    >
                      <EditIcon />
                    </button>
                    <button
                      className={ConfigurationDeleteButton}
                      onClick={() =>
                        dispatch({ type: 'DELETE_TODO', payload: todo.id })
                      }
                    >
                      <DeleteIcon />
                    </button>
                    <button
                      className={ConfigurationButton}
                      onClick={() =>
                        dispatch({ type: 'TOGGLE_TODO', payload: todo.id })
                      }
                    >
                      {todo.status ? <CompletedIcon /> : <UnCheckedIcon />}
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasks;
