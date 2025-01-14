import React  from 'react';

import { useTodos }  from '@/context/TodoContext';

const SessionSwapper: React.FC = () => {
  const {  switchStorageType, storageType } = useTodos();
  return (
      <div>
        <label >
          <input
            type="radio"
            name="storage"
            value="local"
            checked={storageType === 'local'}
            onChange={() => switchStorageType('local')}
          />
          Local Storage
        </label>

        <label>
          <input
            type="radio"
            name="storage"
            value="session"
            checked={storageType === 'session'}
            onChange={() => switchStorageType('session')}
          />
          Session Storage
        </label>
      </div>
  );
};

export default SessionSwapper;
