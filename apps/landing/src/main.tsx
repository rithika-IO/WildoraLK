import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/fraunces'
import '@fontsource-variable/inter'
import '@fontsource-variable/outfit'
import './index.css'
import App from './App.tsx'
import { MOTION_OK } from './lib/motion'

// Scroll reveals hide content only while this class is present (see index.css).
if (MOTION_OK) document.documentElement.classList.add('motion-ok')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
