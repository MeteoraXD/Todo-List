import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';


import themeData from '@/styles/colorsCSS/themeData.css.ts';
import '@/styles/global.css.ts';
import App from '@/views/App.tsx';

document.body.className = themeData;
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
