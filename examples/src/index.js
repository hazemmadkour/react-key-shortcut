import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {KeyShortcutProvider} from 'react-key-shortcut';
import reportWebVitals from './reportWebVitals';

import Test1 from './Test1';
import Test2 from './Test2';

ReactDOM.render(
  <React.StrictMode>
    <KeyShortcutProvider><Test1></Test1><Test2></Test2></KeyShortcutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();