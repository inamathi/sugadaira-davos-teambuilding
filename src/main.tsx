import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TermofSales from './components/termofSales/TermofSales.tsx'
import Header from './components/header/Header.tsx'
import Footer from './components/footer/Footer.tsx'
import About from './components/about/About.tsx'
import PrivacyPolicy from './components/privacyPolicy/PrivacyPolicy.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/term-of-sales" element={<TermofSales />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </StrictMode>
)
