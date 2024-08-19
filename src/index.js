import React from 'react';
import ReactDOM from 'react-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style/flexboxgrid.min.css";
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from './utils/i18n';

import { I18nextProvider } from 'react-i18next';
ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>,
  document.getElementById('root')
);




reportWebVitals();
