export interface Todo {
  id: number;
  userId: string;
  text: string;
  status: boolean;
}

export enum StorageType {
  LOCAL = 'local',
  SESSION = 'session',
}

export type TodoAction =
  | { type: 'ADD_TODO'; payload: { text: string; userId: string } }
  | { type: 'TOGGLE_TODO'; payload: number }
  | { type: 'DELETE_TODO'; payload: number }
  | { type: 'UPDATE_TODO'; payload: { id: number; text: string } }
  | { type: 'SET_TODOS'; payload: Todo[] };


export interface TodoContextType {
  todos: Todo[];
  session: StorageType;
  dispatch: React.Dispatch<TodoAction>;
  currentUser: string;
  storageType: StorageType.LOCAL | StorageType.SESSION;
  switchUser: (newUserId: string) => void;
  switchStorageType: (newStorageType: StorageType.LOCAL | StorageType.SESSION) => void;
}