# react-key-shortcuts

This library is build over [**mousetrap**](https://www.npmjs.com/package/mousetrap). it gives you the ability to register all your shortcuts with action names in order to listen to this action name in any component.

## Why to Use

This library gives you the capability to register all your shortcuts with names once across the system, So  you can bind action on the name direct not the shortcut. also it gives you the capability to bind action on the specific shortcut in one component.

## How to use

* wrap the app in 'index.js' with KeyShortcutprovider

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {KeyShortcutProvider} from 'react-key-shortcuts';
import App from './environment/App';

ReactDOM.render(
  <React.StrictMode>
    <KeyShortcutProvider>
      <App />
    </KeyShortcutProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

```
* Register shortcuts in App component

```javascript
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
```

* Bind action in the components

```javascript
//first component
import React from 'react';
import {useShortcutCallback} from 'react-key-shortcuts';

const Test1 = () => {
  useShortcutCallback('zoom', () => {
    console.log('test1 is zooming');
  });
  return (
    <div>
      press anyKey
    </div>
  );
};

export default Test1;
```

```javascript
//second component
import React from 'react';
import {useShortcutCallback} from 'react-key-shortcuts';

const Test2 = () => {
  useShortcutCallback('zoom', () => {
    console.log('test2 is zooming');
  });
  useShortcutCallback('open', () => {
    console.log('Test2 is opening');
  });
  return (
    <div
      style={{
        display: 'inline-block',
        width: 300,
        height: 300,
        border: '1px solid green',
      }}
    />
  );
};

export default Test2;
```

## API

Hook | Description | Syntax | Params
----|----|----|----
useRegisterShortcuts | used to register shortcut with name | useRegisterShortcuts(shortcuts)| shortcuts: array of object {shortcut,name}. shortcut accept the same input of shortcut in **mousetrap**
useShortcutCallback | used to bind action to one of the shortcut name | useShortcutCallback(name,callback)| name is the register name for the shortcut
useTriggerShortcut | used to trigger shortcut in order to simulate keyboard action programmatically | useTriggerShortcut(shortcutOrName) | shortcutOrName is wether an action name (zoom) or a real shortcut(ctrl+z)
useShortcut | used to bind action to a specfic shortcut to deliver the default behaviour of **mousetrap** | useShortcut(shortcut,callback)| shortcut accept the same input of shortcut in **mousetrap**
