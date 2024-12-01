import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Blog from "./Blog.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Blog />
  </StrictMode>,
)
