import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { DarkModeContextProvider } from './contexts/DarkModeContext';

import 'react-toastify/dist/ReactToastify.css';

import "./services/i18n"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <App />
        <ToastContainer />
      </DarkModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);