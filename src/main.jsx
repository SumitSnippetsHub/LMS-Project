import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// css imports
import './index.css'
// components imports
import App from './App.jsx'
// library imports
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
