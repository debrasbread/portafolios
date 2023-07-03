import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde "react-dom/client" en lugar de "react-dom"
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

createRoot(rootElement).render( // Utiliza createRoot en lugar de ReactDOM.createRoot
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
