import './index.css'
import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import App from './App.jsx'

const container = document.getElementById('root');

// HYBRID LOGIC:
if (container.hasChildNodes()) {
  // If Render sent HTML, use Hydration (SSR)
  hydrateRoot(
    container,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // If Vercel sent an empty page, use Creation (CSR)
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}