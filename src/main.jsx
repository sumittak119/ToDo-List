import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import OrignalToDo from './OrignalToDo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OrignalToDo />
  </StrictMode>,
)
