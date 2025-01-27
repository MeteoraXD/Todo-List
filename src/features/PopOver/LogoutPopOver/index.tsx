import { useNavigate } from '@tanstack/react-router';
import { useState, useEffect, useRef } from 'react';

import {
  PopOverWrapper,
  PopOverTitle,
  PopOverContent,
  PopOverDangerButton,
  PopOverCancelButton, TrrigerButton, PopOverButtonWrapper,
} from '@/features/PopOver/LogoutPopOver/PopOver.css.ts';
import { AUTH_USER_KEY } from '@/hooks/LoginHook';
import LogoutIcon from '@/components/icons/LogoutIcon';

const LogoutPopOver = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const navigate = useNavigate();
  const authUser = localStorage.getItem(AUTH_USER_KEY);

  const toggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node) &&
      !triggerRef.current?.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_USER_KEY);
    sessionStorage.removeItem(`todos_${authUser}`);
    navigate({ to: '/' });
  };

  return (
    <>
      <button ref={triggerRef} onClick={toggleVisibility} className={TrrigerButton}>
        <LogoutIcon /> Logout
      </button>
      {isVisible && (
        <div ref={popoverRef} className={PopOverWrapper}>
          <h2 className={PopOverTitle}>Are You Sure You Want to Logout?</h2>
          <hr />
          <p className={PopOverContent}>
            You will be logged out. Are you sure you want to continue?
          </p>
          <div className={PopOverButtonWrapper}>
            <button
              className={PopOverCancelButton}
              onClick={() => setIsVisible(false)}
            >
              Close
            </button>
            <button
              className={PopOverDangerButton}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutPopOver;
