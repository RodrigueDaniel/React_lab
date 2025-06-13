import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  ToDoFunction from './ToDoFunction.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < ToDoFunction />
  </StrictMode>,
)
