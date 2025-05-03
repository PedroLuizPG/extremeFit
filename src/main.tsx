import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import { AosInit } from './components/aos/aos-init.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AosInit/>
    <App />
  </StrictMode>,
)
