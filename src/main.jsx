import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ImageCarousel from './ImageCarousel.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImageCarousel />
  </StrictMode>,
)
