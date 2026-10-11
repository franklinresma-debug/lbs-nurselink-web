import './nurselink-mobile.js';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import './nurselink-login-v713.css'

import App from './App.jsx'
import './lbs-corporate-theme.css'
import './lbs-uiux-20260925.css'
import './lbs-sidebar-logo-final.css'

import {
  AuthProvider,
} from './context/AuthContext.jsx'

createRoot(
  document.getElementById('root')
).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
)
