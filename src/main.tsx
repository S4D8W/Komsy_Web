import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from 'react-auth-kit';
import AppRouter from './router/router.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
   <AuthProvider
          authType={"cookie"}
          authName={"_auth"}
          cookieDomain={window.location.hostname}
          cookieSecure={false}
        >
    <AppRouter />
   
    </AuthProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
