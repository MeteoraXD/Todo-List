import  { createContext, useContext} from 'react';

import { TodoContextType } from '@/data/DataModel/dataModel.ts';

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

  const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

  export default useTodos
