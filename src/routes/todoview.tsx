import { createFileRoute } from '@tanstack/react-router';

import TodoView from '@/features/Todo/TodoView';

export const Route = createFileRoute('/todoview')({
  component: RouteComponent,
});

function RouteComponent() {
  return <TodoView />;
}
