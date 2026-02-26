import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { TaskMasterProvider } from './contexts/TaskMasterContext';
import { TasksSettingsProvider } from './contexts/TasksSettingsContext';
import { WebSocketProvider } from './contexts/WebSocketContext';
import ProtectedRoute from './components/ProtectedRoute';
import AppContent from './components/app/AppContent';
import CountryGuide from './components/country-guide/CountryGuide';
import i18n from './i18n/config.js';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <AuthProvider>
          <WebSocketProvider>
            <TasksSettingsProvider>
              <TaskMasterProvider>
                <Router basename={window.__ROUTER_BASENAME__ || ''}>
                  <Routes>
                    <Route path="/country-guide" element={<CountryGuide />} />
                    <Route
                      path="/"
                      element={
                        <ProtectedRoute>
                          <AppContent />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/session/:sessionId"
                      element={
                        <ProtectedRoute>
                          <AppContent />
                        </ProtectedRoute>
                      }
                    />
                  </Routes>
                </Router>
              </TaskMasterProvider>
            </TasksSettingsProvider>
          </WebSocketProvider>
        </AuthProvider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
