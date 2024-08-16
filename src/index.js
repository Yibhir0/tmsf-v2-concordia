import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from react-dom/client
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root
root.render(
  <>
    <App />
  </>
);



reportWebVitals();
