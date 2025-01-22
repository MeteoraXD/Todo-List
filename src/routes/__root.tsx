import * as React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';


export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  // const matchedRoute = useMatchRoute();
  // const matchedLogin = matchedRoute({ to: '/login' });
  return (
    <React.Fragment>

      <Outlet />
    </React.Fragment>
  );
}
