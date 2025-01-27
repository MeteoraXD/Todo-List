import { createFileRoute } from '@tanstack/react-router';

import CompletedTasks from '@/features/Todo/TodoFilters/CompletedTask.tsx';

export const Route = createFileRoute('/completedtask')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div><CompletedTasks /></div>;
}
