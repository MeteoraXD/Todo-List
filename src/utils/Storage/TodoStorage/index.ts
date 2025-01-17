import { Todo } from '@/data/DataModel/dataModel.ts';


type StorageType = 'local' | 'session';

const getStorage = (storageType: StorageType): Storage => {
  return storageType === 'local' ? localStorage : sessionStorage;
};

 const getTodos = (session: string, storageType: StorageType): Todo[] => {
  const storage = getStorage(storageType);
  const todos = storage.getItem(`todos_${session}`);
  return todos ? JSON.parse(todos) : [];
};

 const saveTodos = (session: string, todos: Todo[], storageType: StorageType): void => {
  const storage = getStorage(storageType);
  storage.setItem(`todos_${session}`, JSON.stringify(todos));
};

export {
  saveTodos,
  getTodos
}