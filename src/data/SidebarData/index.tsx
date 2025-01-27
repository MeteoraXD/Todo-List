import React from 'react';

import TaskListIcon from '@/components/icons/TaskListIcon';
import TaskCompletedIcon from '@/components/icons/TaskCompleted';
import TaskIncompletedIcon from '@/components/icons/TaskIncompleted ';

interface SidebarProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

const SidebarItems: SidebarProps[] = [
  {
    title: 'All tasks',
    icon: <TaskListIcon />,
    route: '/todoview',
  },
  {
    title: 'Completed tasks',
    icon: <TaskCompletedIcon />,
    route: '/completedtask',
  },
  {
    title: 'Pending tasks',
    icon: <TaskIncompletedIcon />,
    route: '/incompletetask',
  },
];

export type { SidebarProps };
export default SidebarItems;
