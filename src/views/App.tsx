import React from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { routeTree } from '@/routeTree.gen.ts';
import { AuthProvider } from '@/providers/AuthProvider';
import TodoProvider from '@/providers/TodoProvider';

const router = createRouter({ routeTree });
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const App: React.FC = () => {


  return (
    <AuthProvider>
      <TodoProvider>

        <RouterProvider router={router} />
      </TodoProvider>
    </AuthProvider>

  );
};

export default App;

