import React from 'react';


import {
  SwapperWrapper,
  SwapperButton,
  activeButton,
} from './SessionSwapper.css';

import { StorageType } from '@/data/DataModel/dataModel.ts';
import useTodos from '@/hooks/TodoHook/useTodos.ts';

const SessionSwapper: React.FC = () => {
  const { switchStorageType, storageType } = useTodos();

  return (
    <div className={SwapperWrapper}>
      <button
        className={`${SwapperButton} ${storageType === StorageType.LOCAL ? activeButton : ''}`}
        onClick={() => switchStorageType(StorageType.LOCAL)}
        type="button"
      >
        Permanent Storage
      </button>

      <button
        className={`${SwapperButton} ${storageType === StorageType.SESSION ? activeButton : ''}`}
        onClick={() => switchStorageType(StorageType.SESSION)}
        type="button"
      >
        Temporary Storage
      </button>
    </div>
  );
};

export default SessionSwapper;