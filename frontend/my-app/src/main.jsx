// BOOTSTRAP
import './styles/main.scss' // CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // JS

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// RUTAS
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// HEAD
import { HeadProvider } from 'react-head'

// LAYOUT
import Layout from './layouts/Layout.jsx'

// PÁGINAS
import App from './App.jsx'
import Contact from './pages/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeadProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HeadProvider>
  </StrictMode>,
)
