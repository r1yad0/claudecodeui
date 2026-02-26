import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Route /country-guide to a standalone app, avoiding broken main app dependencies
const isCountryGuide = window.location.pathname.startsWith('/country-guide');

if (isCountryGuide) {
  import('./components/country-guide/CountryGuide').then(({ default: CountryGuide }) => {
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <CountryGuide />
      </React.StrictMode>,
    );
  });
} else {
  // Dynamically import the full app (with i18n, katex, etc.) only for non-country-guide routes
  Promise.all([
    import('./App.tsx'),
    import('katex/dist/katex.min.css'),
    import('./i18n/config.js'),
  ]).then(([{ default: App }]) => {
    // Clean up stale service workers on app load to prevent caching issues after builds
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(registration => {
          registration.unregister();
        });
      }).catch(err => {
        console.warn('Failed to unregister service workers:', err);
      });
    }

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
}
