import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // strictmode 때문에 console 두번씩 출력 : TODO 나중에 설명해주신댔음
  <StrictMode>
    <App />
  </StrictMode>,
)
