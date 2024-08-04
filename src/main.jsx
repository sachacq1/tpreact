/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router.jsx'
import './index.css'  ;
import { UserProvider } from './context/useContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
    <Router />
  </React.StrictMode>
  </UserProvider>
);
