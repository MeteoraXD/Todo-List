import React from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
  session: string;
  storageType: 'local' | 'session';
  switchSession: (newSession: string) => void;
  switchStorageType: (newStorageType: 'local' | 'session') => void;
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'UPDATE_TODO'; payload: { id: number; text: string } }
  | { type: 'SET_TODOS'; payload: Todo[] };
