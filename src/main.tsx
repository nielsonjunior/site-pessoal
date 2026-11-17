import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Páginas pré-renderizadas no build (scripts/prerender.mjs) já chegam com o HTML
// pronto: hidratar aproveita esse HTML em vez de redesenhar a página inteira.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
