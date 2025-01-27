import { useEffect, useRef, useState } from 'react';


import { AUTH_USER_KEY } from '@/hooks/LoginHook';
import { StorageType } from '@/data/TodoModel/TodoModel.ts';
import useTodos from '@/hooks/TodoHook/useTodos.ts';
import {
  PopOverButtonWrapper,
  PopOverCancelButton,
  PopOverContent,
  PopOverDangerButton,
  PopOverTitle,
  PopOverWrapper, TrrigerButton,
} from '@/features/PopOver/LogoutPopOver/PopOver.css.ts';
import ResetIcon from '@/components/icons/ResetIcon';

const ResetPopOver = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const authUser = localStorage.getItem(AUTH_USER_KEY);
  const { storageType } = useTodos();

  const toggleVisibility = () => {
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

  const handleReset = () => {
    if (storageType === StorageType.LOCAL) {
      localStorage.removeItem(`todos_${authUser}`);
      location.reload();
    }
    if (storageType === StorageType.SESSION) {
      sessionStorage.removeItem(`todos_${authUser}`);
      location.reload();
    }

  };

  return (
    <>
      <button ref={triggerRef} onClick={toggleVisibility} className={TrrigerButton}>
        <ResetIcon /> Reset Todos
      </button>
      {isVisible && (
        <div ref={popoverRef} className={PopOverWrapper}>

          <h1 className={PopOverTitle}>Reset</h1>
          <hr />
          <p className={PopOverContent}>
            You will lose all your added tasks. Are you sure you want to continue?
          </p>
          <div className={PopOverButtonWrapper}>
            <button
              className={PopOverCancelButton}
              onClick={() => setIsVisible(false)}
            >
              Close
            </button>
            <button className={PopOverDangerButton} onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPopOver;
