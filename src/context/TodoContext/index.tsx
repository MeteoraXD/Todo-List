import { createContext } from 'react';

import { TodoContextType } from '@/data/DataModel/dataModel.ts';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default TodoContext;

