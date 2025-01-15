import React  from 'react';

import useTodos  from '@/context/TodoContext';
import {
  SwapperWrapper,
  SwapperLabel,
  SwapperInput,

} from "@/components/ui/SessionSwapper/SessionSwapper.css"

const SessionSwapper: React.FC = () => {
  const {  switchStorageType, storageType } = useTodos();
  return (
      <div className={SwapperWrapper} >
        <label className={SwapperLabel} >
          <input
            className={SwapperInput}
            type="checkbox"
            name="storage"
            value="local"
            checked={storageType === 'local'}
            onChange={() => switchStorageType('local')}
          />
          Local Storage
        </label>

        <label className={SwapperLabel}>
          <input
            className={SwapperInput}

            type="checkbox"
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
