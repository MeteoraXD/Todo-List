import React, { createContext, useReducer, useContext, useState, useEffect, PropsWithChildren } from 'react';

import { TodoContextType } from '@/data/DataModel/dataModel.ts';
import { todoReducer } from '@/providers/reducer/todoReducer.ts';
import { getTodos, saveTodos } from '@/utils/Storage';


type StorageType = 'local' | 'session';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

 const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

 const TodoProvider: React.FunctionComponent<PropsWithChildren> = ({ children ,  }) => {
  const [session, setSession] = useState<string>('default');
  const [storageType, setStorageType] = useState<StorageType>('local');
  const [todos, dispatch] = useReducer(todoReducer, getTodos(session, storageType));



  useEffect(() => {
    saveTodos(session, todos, storageType);
  }, [todos, session, storageType])

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
export  { useTodos };

export  default TodoProvider
