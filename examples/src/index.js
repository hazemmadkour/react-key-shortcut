import React from 'react';
import ReactDOM from 'react-dom';
import {KeyShortcutProvider} from 'react-key-shortcuts';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <KeyShortcutProvider shortcuts={[
    {shortcut: ['ctrl+z', 'ctrl+d'], name: 'zoom'},
    {shortcut: 'ctrl+d', name: 'open'},
  ]}>
      <App />
    </KeyShortcutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
