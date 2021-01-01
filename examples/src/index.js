import React from 'react';
import ReactDOM from 'react-dom';
import {KeyShortcutProvider} from 'react-key-shortcuts';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <KeyShortcutProvider>
      <App />
    </KeyShortcutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
