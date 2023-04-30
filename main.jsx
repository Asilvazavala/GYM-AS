import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App'
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById('app'))
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
