// BOOTSTRAP
import './styles/main.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// RUTAS
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// PÁGINAS
import App from './App.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
