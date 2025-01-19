import React, { PropsWithChildren, useEffect, useReducer, useState } from 'react';

import { todoReducer } from '@/providers/reducer/TodoReducer/todoReducer.ts';
import { getTodos, saveTodos } from '@/utils/Storage/TodoStorage';
import { TodoContext } from '@/context/TodoContext';

type StorageType = 'local' | 'session';


const TodoProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<string>('default');
  const [storageType, setStorageType] = useState<StorageType>('local');
  const [todos, dispatch] = useReducer(todoReducer, getTodos(session, storageType));


  useEffect(() => {
    saveTodos(session, todos, storageType);
  }, [todos, session, storageType]);

  const switchSession = (newSession: string) => {
    setSession(newSession);
    const sessionTodos = getTodos(newSession, storageType);
    dispatch({ type: 'SET_TODOS', payload: sessionTodos });
  };

  const switchStorageType = (newStorageType: StorageType) => {
    setStorageType(newStorageType);
    const sessionTodos = getTodos(session, newStorageType);
    dispatch({ type: 'SET_TODOS', payload: sessionTodos });
  };

  return (
    <TodoContext.Provider value={{ todos, dispatch, session, switchSession, storageType, switchStorageType }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;