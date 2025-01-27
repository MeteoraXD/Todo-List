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
    setCollapsed(!isCollapsed);
  };

  return (
    <aside className={isCollapsed ? SidebarVariants.collapsed : SidebarVariants.expanded}>
      <button className={ToggleButton} onClick={ToggleSidebar}> {isCollapsed ? <ToggleOffButtonIcon /> :
        <ToggleOnButtonIcon />} </button>
      <ul className={SidebarItemWrapper}>
        {SidebarItems.map((sidebarItems) => (
          <li className={StyleSidebarItems}>
            <Link to={sidebarItems.route} className={isCollapsed ? LinkedStyled.collapsed : LinkedStyled.expanded}>
              {sidebarItems.icon}
              <span className={isCollapsed ? LinkTitle.collapsed : LinkTitle.expanded}>
              {sidebarItems.title}
                </span>
            </Link>
          </li>
        ))}
      </ul>

    </aside>
  );
};

export default TodoSidebar;
