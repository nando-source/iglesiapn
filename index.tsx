import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';

console.log("Iniciando aplicación: Iglesia de Cristo Pueblo Nuevo");

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>
    );
    console.log("React montado correctamente en #root");
  } catch (error) {
    console.error("Fallo crítico al inicializar React:", error);
  }
} else {
  console.error("Error: No se encontró el elemento raíz 'root' en el HTML.");
}