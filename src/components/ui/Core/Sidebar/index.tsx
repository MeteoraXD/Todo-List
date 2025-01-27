import { Link } from '@tanstack/react-router';

import {
  SidebarWrapper, SidebarItems,
} from '@/components/ui/Core/Sidebar/Sidebar.css.ts';
import TaskListIcon from '@/components/icons/TaskListIcon';
import TaskCompletedIcon from '@/components/icons/TaskCompleted';
import TaskIncompletedIcon from '@/components/icons/TaskIncompleted ';

const TodoSidebar = () => {

  return (
    <aside className={SidebarWrapper}>

      <Link className={SidebarItems} to={'/todoview'}> <TaskListIcon /> <span>All Tasks</span></Link>
      <Link className={SidebarItems} to={'/completedtask'}><TaskCompletedIcon /> <span>Completed Tasks</span></Link>
      <Link className={SidebarItems} to={'/incompletetask'}><TaskIncompletedIcon /> <span>Pending Tasks</span></Link>
    </aside>
  );

};
export default TodoSidebar;