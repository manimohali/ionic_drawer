import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';


if (process.env.NODE_ENV === 'development') {
     /**
      * Some Code
     */
}

console.log(import.meta.env.VITE_SITE_KEY)

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  // <React.StrictMode>
    <App />
// </React.StrictMode>
); 
