import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hook from './Hooks'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Hook/>
  </StrictMode>
)
