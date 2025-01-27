import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';

import {
  PopOverWrapper,
  PopOverTitle,
  PopOverContent,
  PopOverDangerButton,
  PopOverCancelButton,
} from '@/features/PopOver/LogoutPopOver/PopOver.css.ts';
import { AUTH_USER_KEY } from '@/hooks/LoginHook';


const LogoutPopOver = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const authUser = localStorage.getItem(AUTH_USER_KEY);

  const toggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(`todos_${authUser}`);
    navigate({ to: '/' });
  };

  return (
    <>
      <button onClick={toggleVisibility}>
        Click Me
      </button>
      {isVisible && (
        <div className={PopOverWrapper}>
          <h2 className={PopOverTitle}>Are You Sure You Want to Logout ?</h2>
          <hr />
          <p className={PopOverContent}>You will be logged out. Are you sure you want to continue?</p>
          <button className={PopOverCancelButton}>Close</button>
          
          <button className={PopOverDangerButton} onClick={handleLogout}>Logout</button>
        </div>
      )}
    </>
  );
};

export default LogoutPopOver;