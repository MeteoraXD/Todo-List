import React, { useState, useEffect, useRef } from 'react';

import {
  DropDownButton,
  DropDownList,
  DropDownItems,
  NavBarWrapper,
  NavBarHeader,
  NavBarTime,
} from '@/components/ui/Core/Navbar/NavBar.css.ts';
import PlaceholderIcon from '@/components/icons/PlaceholderIcon';
import ResetPopOver from '@/features/PopOver/ResetPopOver';
import LogoutPopOver from '@/features/PopOver/LogoutPopOver';
import ThemeToggle from '@/features/ColorModeToggle';

const TodoNavbar: React.FunctionComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };


  const todayDate = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleString('default', { weekday: 'short' });
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' });
    const year = today.getFullYear();

    const getOrdinalSuffix = (n: number) => {
      if (n > 3 && n < 21) return 'th';
      switch (n % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    };

    return ` ${dayOfWeek}, ${day}${getOrdinalSuffix(day)} ${month} ${year}`;
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        setUsername(user.name);
      } catch (error) {
        console.error('Error parsing authUser from localStorage:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  const handlePopoverClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <header className={NavBarHeader}>
      <nav className={NavBarWrapper}>
        <h1>Hello, {username}</h1>
        <h2 className={NavBarTime}>{todayDate()}</h2>
        <div ref={dropdownRef} className={DropDownButton} onClick={toggleDropdown}>
          <PlaceholderIcon />

          {isDropdownOpen && (
            <div onClick={handlePopoverClick}>
              <ul className={DropDownList}>
                <li className={DropDownItems}>
                  <ThemeToggle />

                </li>
                <li className={DropDownItems}>
                  <LogoutPopOver />
                </li>
                <li className={DropDownItems}>
                  <ResetPopOver />
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default TodoNavbar;
