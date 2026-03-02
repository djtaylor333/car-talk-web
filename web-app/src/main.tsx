import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Expose lightweight test helpers on window.__e2e in dev mode.
// Tree-shaken out of production builds (import.meta.env.DEV === false).
if (import.meta.env.DEV) {
  import('./services/firebaseConfig').then(({ auth }) => {
    import('firebase/auth').then(({ signOut, deleteUser }) => {
      (window as Window & { __e2e?: Record<string, () => Promise<void>> }).__e2e = {
        signOut: () => signOut(auth),
        deleteCurrentUser: () => {
          const user = auth.currentUser;
          return user ? deleteUser(user) : Promise.resolve();
        },
      };
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
