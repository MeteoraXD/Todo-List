import { createContext } from 'react';

import { TodoContextType } from '@/data/TodoModel/TodoModel.ts';

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default TodoContext;