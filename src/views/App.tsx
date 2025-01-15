import React from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from '@/routeTree.gen.ts';
// import LoginView from '@/components/ui/Auth/AuthView/LoginView';

const router = createRouter({ routeTree });
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => {


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;

