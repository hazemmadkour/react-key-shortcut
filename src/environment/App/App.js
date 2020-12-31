import React from 'react';
import {useRegisterShortcuts} from 'react-key-shortcuts';

import Test1 from './Test1';
import Test2 from './Test2';

const App = () => {
  useRegisterShortcuts([
    {shortcut: ['ctrl+z', 'ctrl+d'], name: 'zoom'},
    {shortcut: 'ctrl+d', name: 'open'},
  ]);
  return (
    <div>
      <Test1 />
      <Test2 />
    </div>
  );
};

export default App;
