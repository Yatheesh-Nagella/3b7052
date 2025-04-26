import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SelectedNodeProvider } from './contexts/SelectedNodeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SelectedNodeProvider>
      <App />
    </SelectedNodeProvider>
  </React.StrictMode>,
)