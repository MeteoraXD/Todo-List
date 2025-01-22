import { StorageType, Todo } from '@/data/DataModel/dataModel.ts';

export const getTodos = (session: string, storageType: StorageType): Todo[] => {
  const storage = storageType === StorageType.LOCAL ? localStorage : sessionStorage;
  const todos = storage.getItem(`todos_${session}`);
  return todos ? JSON.parse(todos) : [];
};

export const saveTodos = (session: string, todos: Todo[], storageType: StorageType): void => {
  const storage = storageType === StorageType.LOCAL ? localStorage : sessionStorage;
  storage.setItem(`todos_${session}`, JSON.stringify(todos));
};
