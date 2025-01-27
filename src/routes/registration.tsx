import { createFileRoute } from '@tanstack/react-router';

import RegistrationView from '@/features/Auth/AuthView/RegistrationView';

export const Route = createFileRoute('/registration')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div><RegistrationView /></div>;
}
