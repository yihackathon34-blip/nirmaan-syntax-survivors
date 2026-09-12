import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { VerificationProvider } from './context/VerificationContext';
import { DataProvider } from './context/DataContext';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext';
import { AccessibilityProvider } from './context/AccessibilityContext';
import App from './App.jsx'
import { ErrorBoundary } from './ErrorB.jsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ToastProvider>
            <AuthProvider>
                <DataProvider>
                    <VerificationProvider>
                        <AccessibilityProvider>
                            <BrowserRouter>
                                <ErrorBoundary><App /></ErrorBoundary>
                            </BrowserRouter>
                        </AccessibilityProvider>
                    </VerificationProvider>
                </DataProvider>
            </AuthProvider>
        </ToastProvider>
    </React.StrictMode>,
)
