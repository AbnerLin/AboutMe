import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

var changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
};

ReactDOM.render(
  <I18nextProvider i18n={ i18n }>
    <App changeLanguage={changeLanguage} />
  </I18nextProvider>,
  document.getElementById('root')
);
