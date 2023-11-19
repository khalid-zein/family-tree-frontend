import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import "./components/i18next";
import { EditProvider } from './context/AppContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EditProvider>
      <App />
    </EditProvider>
  </React.StrictMode>
);

