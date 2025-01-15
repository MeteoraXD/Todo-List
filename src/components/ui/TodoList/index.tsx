import React, { useState } from 'react';

import useTodos from '@/context/TodoContext';
import { Todo } from '@/data/DataModel/dataModel.ts';
import DeleteIcon from '@/components/icons/DeleteIcon';
import EditIcon from '@/components/icons/EditIcon/EditIcon.tsx';
import CompletedIcon from '@/components/icons/CompletedIcon';
import InCompletedIcon from '@/components/icons/IncompleteIcon/IncompleteIcon.tsx';
import {
  ListWrapper,
  EditInput,
  ConfigurationButton,
  TaskList,
  TaskStatus, TaskWrapper, ConfigurationButtonWrapper,
} from '@/components/ui/TodoList/TodoList.css';
import SaveIcon from '@/components/icons/SaveIcon';
import CancelIcon from '@/components/icons/CancelIcon';

const TodoList: React.FC = () => {
  const { todos, dispatch } = useTodos();
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>('');

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

  return (
    <ul className={ListWrapper} >
      {todos.map(todo => (
        <li  key={todo.id}>
          {editTodoId === todo.id ? (
            <div className={TaskWrapper}  >
              <input
                className={EditInput}
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <div className={ConfigurationButtonWrapper}  >
              <button className={ConfigurationButton} onClick={() => handleUpdate(todo.id)}><SaveIcon/></button>

              <button className={ConfigurationButton} onClick={() => setEditTodoId(null)}><CancelIcon/></button>
              </div>
              </div>
          ) : (
            <div className={TaskWrapper}>
              <span className={todo.completed ? TaskList[TaskStatus.COMPLETED]:TaskList[TaskStatus.PENDING]}>
                {todo.text}
              </span>
              <div className={ConfigurationButtonWrapper} >
              <button onClick={() => handleEdit(todo)} className={ConfigurationButton} ><EditIcon/></button>
              <button  className={ConfigurationButton} onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
                <DeleteIcon/>
              </button>
              <button  className={ConfigurationButton} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
                {todo.completed ? <InCompletedIcon/> : <CompletedIcon/>}
              </button>
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
