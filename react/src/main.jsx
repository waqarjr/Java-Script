import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hook from './Hooks'
import Hooks1 from '../Hooks1'
import Formhandle from './Formhandle'
import Formvalidation from './Formvalidation'
import Parent from './Parent'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hook/> */}
    {/* <Hooks1/> */}
    {/* <Formhandle/> */}
    {/* <Formvalidation/> */}
    <Parent/>
  </StrictMode>
)
