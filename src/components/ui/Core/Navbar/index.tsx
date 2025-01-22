import React, { useState } from 'react';

import Logout from '@/components/ui/Core/LogOut/Logout.tsx';
import KillButton from '@/components/ui/KillButton';
import TodoProvider from '@/providers/TodoProvider';
import {
  DropDownButton,
  DropDownList,
  DropDownItems,
  NavBarWrapper,
  NavBarHeader, NavBarTime,
} from '@/components/ui/Core/Navbar/NavBar.css.ts';
import PlaceholderIcon from '@/components/icons/PlaceholderIcon';

const TodoNavbar: React.FunctionComponent = () => {


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const todayDate = () => {
    const today = new Date();
    const dayOfWeek = today.toLocaleString('default', { weekday: 'short' });
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'short' }); // Get short month name (e.g., 'Jan')
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

  return (
    <header className={NavBarHeader}>
      <nav className={NavBarWrapper}>
        <h1>Hello User</h1>
        <h2 className={NavBarTime}>{todayDate()}</h2>
        <div className={DropDownButton} onClick={toggleDropdown}>
          <PlaceholderIcon />
          {isDropdownOpen && (
            <ul className={DropDownList}>
              <li className={DropDownItems}>
                <Logout />

              </li>
              <li className={DropDownItems}>
                <TodoProvider>
                  <KillButton />
                </TodoProvider>
              </li>
            </ul>
          )}


        </div>
      </nav>
    </header>
  );
};

export default TodoNavbar;