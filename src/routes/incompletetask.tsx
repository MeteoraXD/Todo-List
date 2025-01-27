import { createFileRoute } from '@tanstack/react-router';

import IncompleteTasks from '@/features/Todo/TodoFilters/IncompleteTask.tsx';

export const Route = createFileRoute('/incompletetask')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div><IncompleteTasks /></div>;
}
