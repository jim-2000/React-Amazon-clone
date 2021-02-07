import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from './Component/StateProvider/Reduicer';
import { StateProvider } from './Component/StateProvider/StateProvider';

ReactDOM.render(

  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>

      <App />

    </StateProvider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
