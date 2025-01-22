import { useContext } from 'react';

import { TodoContextType } from '@/data/DataModel/dataModel.ts';
import TodoContext from '@/context/TodoContext';

const useTodos = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos must be used within a TodoProvider');
  }
  return context;
};

export default useTodos;