import { createFileRoute } from '@tanstack/react-router';

import TodoView from '@/components/ui/TodoView';

export const Route = createFileRoute('/todoview')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div><TodoView /></div>;
}
