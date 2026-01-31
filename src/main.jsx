import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App1 from './App1.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/fc' element={<App1/>} />

    </Routes>
    </BrowserRouter>
    // <App />
)
