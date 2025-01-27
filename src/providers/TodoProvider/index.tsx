import React, { PropsWithChildren, useEffect, useReducer, useState } from 'react';

import { todoReducer } from '@/providers/reducer/TodoReducer/todoReducer.ts';
import { getTodos, saveTodos } from '@/utils/Storage/TodoStorage';
import TodoContext from '@/context/TodoContext';
import { StorageType } from '@/data/TodoModel/TodoModel.ts';
import { AUTH_USER_KEY } from '@/hooks/LoginHook';

const TodoProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<StorageType>(StorageType.LOCAL);
  const [storageType, setStorageType] = useState<StorageType>(StorageType.LOCAL);
  const [todos, dispatch] = useReducer(todoReducer, getTodos(storageType));

  useEffect(() => {
    saveTodos(todos, storageType);
  }, [todos, storageType]);

  const switchUser = (newUserId: string) => {
    localStorage.setItem(AUTH_USER_KEY, newUserId);
    const userTodos = getTodos(storageType);
    dispatch({ type: 'SET_TODOS', payload: userTodos });
  };

  const switchSession = (newSession: StorageType) => {
    setSession(newSession);
    const sessionTodos = getTodos(newSession);
    dispatch({ type: 'SET_TODOS', payload: sessionTodos });
  };

  const switchStorageType = (newStorageType: StorageType) => {
    setStorageType(newStorageType);
    const sessionTodos = getTodos(newStorageType);
    dispatch({ type: 'SET_TODOS', payload: sessionTodos });
  };

  return (
    <TodoContext.Provider
      value={{ todos, dispatch, session, switchSession, switchUser, storageType, switchStorageType }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;