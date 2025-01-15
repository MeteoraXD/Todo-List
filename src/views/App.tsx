import React, { useState } from 'react';

import LogInView from '../components/ui/Auth/AuthView/LoginView'

import TodoView from '@/components/ui/TodoView/index.tsx';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {isAuthenticated ? (
        <TodoView />
      ) : (
        <LogInView onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default App;
