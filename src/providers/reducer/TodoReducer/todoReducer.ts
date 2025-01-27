import { Todo, TodoAction } from '@/data/TodoModel/TodoModel.ts';


const todoReducer = (state: Todo[], action: TodoAction): Todo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload.text, userId: action.payload.userId, status: false }];
    case 'TOGGLE_TODO':
      return state.map(todo => (todo.id === action.payload ? { ...todo, status: !todo.status } : todo));
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    case 'UPDATE_TODO':
      return state.map(todo => (todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo));
    case 'SET_TODOS':
      return action.payload;
    default:
      return state;
  }
};
export { todoReducer };
