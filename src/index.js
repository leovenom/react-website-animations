import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import SimpleReactLightbox from 'simple-react-lightbox';

const rootElement = document.getElementById('root');
const app = (
  <Router>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </Router>
);

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(app, rootElement);
} else {
  ReactDOM.render(app, rootElement);
}

reportWebVitals();
