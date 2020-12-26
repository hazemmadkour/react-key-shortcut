import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {KeyShortcutProvider} from './lib';

import Test1 from './Test1';
import Test2 from './Test2';

ReactDOM.render(
  <React.StrictMode>
    <KeyShortcutProvider><Test1></Test1><Test2></Test2></KeyShortcutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
