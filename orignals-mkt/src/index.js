import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // Adicionando a importação do Router
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> {/* Adicionando React.StrictMode */}
    <Router> {/* Adicionando o Router */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
