import { createFileRoute } from '@tanstack/react-router';

import LoginView from '@/features/Auth/AuthView/LoginView';


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