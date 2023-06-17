import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-auth-kit';
import AppRouter from './router/router.tsx';
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <AuthProvider
          authType={"cookie"}
          authName={"_auth"}
          cookieDomain={window.location.hostname}
          cookieSecure={false}
        >
    <AppRouter />
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
