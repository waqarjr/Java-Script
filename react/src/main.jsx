import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hook from './Hooks'
import Hooks1 from '../Hooks1'
import Formhandle from './Formhandle'
import Formvalidation from './Formvalidation'
import Parent from './Parent'
import PracHooks from './PracHooks'
import FirstP from './Problem/FirstP'
import ReadP from './Problem/readP'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Hook/> */}
    {/* <Hooks1/> */}
    {/* <Formhandle/> */}
    {/* <Formvalidation/> */}
    {/* <PracHooks/> */}
    {/* <Parent/> */}
    <FirstP/>
    <ReadP/>
  </StrictMode>
)
