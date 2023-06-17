import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './router/Router.tsx';
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
    <App />
  </React.StrictMode>,
)
