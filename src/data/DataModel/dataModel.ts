import React from 'react';

export interface Todo {
  id: number;
  userId: string;
  text: string;
  completed: boolean;
}

export enum StorageType {
  LOCAL = 'local',
  SESSION = 'session',
}

export interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<TodoAction>;
  session: string;
  storageType: StorageType.LOCAL | StorageType.SESSION;
  switchSession: (newSession: string) => void;
  switchStorageType: (newStorageType: StorageType.LOCAL | StorageType.SESSION) => void;
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'UPDATE_TODO'; payload: { id: number; text: string } }
  | { type: 'SET_TODOS'; payload: Todo[] };
