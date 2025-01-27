import { useState } from 'react';

import {
  PopOverWrapper,
  PopOverTitle,
  PopOverContent,
  PopOverDangerButton,
  PopOverCancelButton,
} from '@/features/PopOver/LogoutPopOver/PopOver.css.ts';
import { AUTH_USER_KEY } from '@/hooks/LoginHook';
import { StorageType } from '@/data/TodoModel/TodoModel.ts';
import useTodos from '@/hooks/TodoHook/useTodos.ts';


const ResetPopOver = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const authUser = localStorage.getItem(AUTH_USER_KEY);
  const { storageType } = useTodos();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleLogout = () => {

    if (storageType === StorageType.LOCAL) {
      localStorage.removeItem(`todos_${authUser}`);
      location.reload();
    } else if (storageType === StorageType.SESSION) {
      sessionStorage.removeItem(`todos_${authUser}`);
      location.reload();
    }
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        Click Me
      </button>
      {isVisible && (
        <div className={PopOverWrapper}>
          <h1 className={PopOverTitle}>Reset</h1>
          <hr />
          <p className={PopOverContent}>You will lose all your added tasks. Are you sure you want to continue?</p>
          <button className={PopOverCancelButton}>Close</button>

          <button className={PopOverDangerButton} onClick={handleLogout}>Reset</button>
        </div>
      )}
    </>
  );
};

export default ResetPopOver;