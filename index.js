import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new `react-dom/client`
import App from './App';
import './index.css';

// Create the root element using React 18's `createRoot` method
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
