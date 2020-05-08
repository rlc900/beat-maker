import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'


  render ( 
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));


serviceWorker.unregister();
