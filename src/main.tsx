import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';


import themeData from '@/styles/colorsCSS/themeData.css.ts';
import '@/styles/global.css.ts';
import App from '@/views/App.tsx';
import { AuthProvider } from '@/providers/AuthProvider';
import TodoProvider from '@/providers/TodoProvider';

document.body.className = themeData;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <TodoProvider>
        <ToastContainer
          autoClose={2000}
          hideProgressBar={true}
          closeOnClick
          closeButton={false}
          draggable
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          position={'top-right'}
        />
        <App />
      </TodoProvider>
    </AuthProvider>
  </StrictMode>,
);
