import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import TermofSales from './components/termofSales/TermofSales.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/term-of-sales" element={<TermofSales />} />
      </Routes>
    </BrowserRouter> */}
    <App />
  </StrictMode>
)
