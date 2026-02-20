import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';

/**
 * Iglesia de Cristo Pueblo Nuevo - Punto de entrada estable
 */

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>
  );
  console.log("React 18 montado con éxito.");
} else {
  console.error("Error: No se encontró el div #root.");
}