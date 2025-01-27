import { Link } from '@tanstack/react-router';
import React, { useState } from 'react';

import {
  LinkedStyled,
  LinkTitle,
  SidebarItemWrapper,
  SidebarVariants,
  StyleSidebarItems, ToggleButton,
} from '@/components/ui/Core/Sidebar/Sidebar.css.ts';
import SidebarItems, { SidebarProps } from '@/data/SidebarData';
import ToggleOffButtonIcon from '@/components/icons/ToggleOffButton';
import ToggleOnButtonIcon from '@/components/icons/ToggleOnButtonIcon';

type SidebarItemsProps = {
  sidebarItems: SidebarProps[];
};

const TodoSidebar: React.FunctionComponent<SidebarItemsProps> = () => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  const ToggleSidebar = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <aside className={isCollapsed ? SidebarVariants.collapsed : SidebarVariants.expanded}>
      <ul className={SidebarItemWrapper}>
        {SidebarItems.map((sidebarItem, index) => (
          <li key={index} className={StyleSidebarItems}>
            <Link to={sidebarItem.route} className={isCollapsed ? LinkedStyled.collapsed : LinkedStyled.expanded}>
              {sidebarItem.icon}
              <span className={isCollapsed ? LinkTitle.collapsed : LinkTitle.expanded}>
              {sidebarItem.title}
                </span>
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={ToggleSidebar} className={ToggleButton}>{isCollapsed ? <ToggleOffButtonIcon /> :
        <ToggleOnButtonIcon />}</button>

    </aside>
  );
};

export default TodoSidebar;
