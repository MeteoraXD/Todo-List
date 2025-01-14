import React, { useState } from 'react';

import { useTodos } from '@/context/TodoContext';
import { Todo } from '@/data/DataModel/dataModel.ts';


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
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {editTodoId === todo.id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleUpdate(todo.id)}>Save</button>
              <button onClick={() => setEditTodoId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
              >
                {todo.text}
              </span>
              <button onClick={() => handleEdit(todo)}>Edit</button>
              <button onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
