import { createFileRoute } from '@tanstack/react-router';

import LoginView from '@/components/ui/Auth/AuthView/LoginView';


export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <LoginView />
    </div>
  );
}